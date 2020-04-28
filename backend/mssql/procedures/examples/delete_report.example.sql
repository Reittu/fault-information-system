DECLARE	@responseMessage NVARCHAR(250)

EXEC	dbo.uspDeleteReport
		@pReportID = 4,
		@pUsername = N'guest',
		@responseMessage = @responseMessage OUTPUT

SELECT	@responseMessage as N'result'