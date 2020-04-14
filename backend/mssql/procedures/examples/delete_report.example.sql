DECLARE	@responseMessage NVARCHAR(250)

EXEC	dbo.uspDeleteReport
		@pReportID = 4,
		@pUserID = 2,
		@responseMessage = @responseMessage OUTPUT

SELECT	@responseMessage as N'result'