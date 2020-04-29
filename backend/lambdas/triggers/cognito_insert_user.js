const { connectAndQuery, executeQuery } = require('../common/SQL');

exports.handler = async (event, context, callback) => {
  const username = event.userName;
  const { name, email } = event.request.userAttributes;

  console.log("Current data", username, name, email);

  if (!username || !name || !email) return callback(null, event);

  try {
    const data = await connectAndQuery(() => executeQuery`
  DECLARE @responseMessage NVARCHAR(250)
  EXEC dbo.uspAddUser
            @pUsername = ${username},
            @pName = ${name},
            @pEmail = ${email},
            @responseMessage=@responseMessage OUTPUT
  SELECT	@responseMessage as N'result'
  `);
    console.log("Data was: ", data);
  } catch (error) {
    console.log("Error occured...", error);
  }

  callback(null, event);
};