const Responses = require('../common/API_Responses');
const { withHooks } = require('../common/hooks');
const { connectAndQuery, executeQuery } = require('../common/SQL');
const { verifyJwt } = require('../common/JWT');

const handler = async event => {
  const { latitude, longitude, subject, description, city, postcode, address } = event.body;
  if (
    Number.isNaN(Number(latitude))
    || Number.isNaN(Number(longitude))
    || subject.length < 3
    || subject.length > 50
    || description.length < 5
    || description.length > 500
    || (city && city.length > 200)
    || (postcode && postcode.length > 15)
    || (address && address.length > 250)
  ) {
    return Responses._400({ message: 'Invalid parameters.' })
  }

  let username = 'guest';

  const auth = event.headers.Authorization;
  if (auth) {
    const [, token] = auth.split(' ');
    try {
      const user = await verifyJwt(token);
      username = user.username;
    } catch (err) {
      return Responses._400({ message: err })
    }
  }

  const data = await connectAndQuery(() => executeQuery`
  DECLARE @responseMessage NVARCHAR(250)
  EXEC dbo.uspAddReport
        @pUsername = ${username},
        @pLatitude = ${latitude},
        @pLongitude = ${longitude},
        @pSubject = ${subject},
        @pDescription = ${description},
        @pCity = ${city},
        @pPostcode = ${postcode},
        @pAddress = ${address},
        @responseMessage = @responseMessage OUTPUT
  SELECT	@responseMessage as N'result'
  `);
  return Responses._200({ message: data });
};

exports.handler = withHooks(handler);