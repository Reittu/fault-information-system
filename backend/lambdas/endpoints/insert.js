const Responses = require('../common/API_Responses');
const { withHooks } = require('../common/hooks');
const { connectAndQuery, executeQuery } = require('../common/SQL');

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

  // Hard coded all the custom reports to be from user "guest" (id 2) before Cognito implementation

  const data = await connectAndQuery(() => executeQuery`
  DECLARE @responseMessage NVARCHAR(250)
  EXEC dbo.uspAddReport
        @pUserID = 2,
        @pLatitude = ${latitude},
        @pLongitude = ${longitude},
        @pSubject = ${subject},
        @pDescription = ${description},
        @pCity = ${city},
        @pPostcode = ${postcode},
        @pAddress = ${address},
        @responseMessage=@responseMessage OUTPUT
  SELECT	@responseMessage as N'result'
  `);
  return Responses._200({ message: JSON.stringify(data) });
};

exports.handler = withHooks(handler);