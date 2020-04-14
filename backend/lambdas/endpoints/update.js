const Responses = require('../common/API_Responses');
const { withHooks } = require('../common/hooks');
const { dbQuery } = require('../common/db_query');

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

  // Hard coded all the custom reports to be from user "guest" (id 2) before Cognito implementation

  const data = await dbQuery`
  DECLARE	@responseMessage NVARCHAR(250)
  EXEC	dbo.uspUpdateReport
      @pReportID = ${id},
      @pUserID = 2,
      @pSubject = N'${subject}', 
      @pDescription = N'${description}',
      @responseMessage = @responseMessage OUTPUT
  SELECT	@responseMessage as N'result'
  `
  return Responses._200({ message: JSON.stringify(data) });
};

exports.handler = withHooks(handler);