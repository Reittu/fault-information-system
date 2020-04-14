DECLARE	@responseMessage NVARCHAR(250)

EXEC	dbo.uspUpdateReport
		@pReportID = 2,
		@pUserID = 2,
		@pSubject = N'New subject', 
		@pDescription = N'New description',
		@responseMessage = @responseMessage OUTPUT

SELECT	@responseMessage as N'result'