const { connectAndQuery, executeQuery } = require('../common/SQL');

exports.handler = async (event) => {
  const username = event.userName;
  const { name, email } = event.request.userAttributes;

  if (!username || !name || !email) return event;
  const data = await connectAndQuery(() => executeQuery`
  DECLARE @responseMessage NVARCHAR(250)
  EXEC dbo.uspAddUser
            @pUsername = ${username},
            @pName = ${name},
            @pEmail = ${email},
            @responseMessage=@responseMessage OUTPUT
  SELECT	@responseMessage as N'result'
  `);
  console.log(data);
  return event;
};