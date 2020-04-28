DECLARE	@responseMessage NVARCHAR(250)

EXEC	dbo.uspUpdateReport
		@pReportID = 2,
		@pUsername = 'guest',
		@pSubject = N'New subject', 
		@pDescription = N'New description',
		@responseMessage = @responseMessage OUTPUT

SELECT	@responseMessage as N'result'