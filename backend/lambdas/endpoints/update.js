const Responses = require('../common/API_Responses');
const { withHooks } = require('../common/hooks');
const { connectAndQuery, executeQuery } = require('../common/SQL');
const { verifyJwt } = require('../common/JWT');

const handler = async event => {
  const { id, subject, description } = event.body;
  if (
    id.length > 20
    || /\D/.test(id)
    || subject.length < 3
    || subject.length > 50
    || description.length < 5
    || description.length > 500
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
  DECLARE	@responseMessage NVARCHAR(250)
  EXEC dbo.uspUpdateReport
      @pReportID = ${id},
      @pUsername = ${username},
      @pSubject = ${subject}, 
      @pDescription = ${description},
      @responseMessage = @responseMessage OUTPUT
  SELECT	@responseMessage as N'result'
  `);
  return Responses._200({ message: data });
};

exports.handler = withHooks(handler);