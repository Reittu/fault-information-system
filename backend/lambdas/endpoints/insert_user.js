const Responses = require('../common/API_Responses');
const { withHooks } = require('../common/hooks');
const { connectAndQuery, executeQuery } = require('../common/SQL');

const handler = async event => {
  const { name, username, email } = event.body;
  if (!username || !name || !email) {
    console.log(event);
    return Responses._400({ message: 'Invalid request' });
  }

  const data = await connectAndQuery(() => executeQuery`
  DECLARE @responseMessage NVARCHAR(250)
  EXEC dbo.uspAddUser
            @pUsername = ${username},
            @pName = ${name},
            @pEmail = ${email},
            @responseMessage=@responseMessage OUTPUT
  SELECT	@responseMessage as N'result'
  `);
  return Responses._200({ message: data });
};

exports.handler = withHooks(handler);