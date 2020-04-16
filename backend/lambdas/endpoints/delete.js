const Responses = require('../common/API_Responses');
const { withHooks } = require('../common/hooks');
const { connectAndQuery, executeQuery } = require('../common/SQL');

const handler = async event => {
  const { id } = event.body;
  if (
    id.length > 20 
    || /\D/.test(id) 
  ) {
    return Responses._400({ message: 'Invalid parameters.' })
  }

  // Hard coded all the custom reports to be from user "guest" (id 2) before Cognito implementation

  const data = await connectAndQuery(() => executeQuery`
  DECLARE	@responseMessage NVARCHAR(250)
  EXEC	dbo.uspDeleteReport
      @pReportID = ${id},
      @pUserID = 2,
      @responseMessage = @responseMessage OUTPUT
  SELECT	@responseMessage as N'result'
  `);
  return Responses._200({ message: data });
};

exports.handler = withHooks(handler);