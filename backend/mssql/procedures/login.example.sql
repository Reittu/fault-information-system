DECLARE	@responseMessage NVARCHAR(250)

-- Correct login and password
EXEC	dbo.uspLogin
		@pLoginName = N'Another',
		@pPassword = N'123',
		@responseMessage = @responseMessage OUTPUT

SELECT	@responseMessage as N'@responseMessage'

-- Incorrect login
EXEC	dbo.uspLogin
		@pLoginName = N'Nonexisting_user', 
		@pPassword = N'123',
		@responseMessage = @responseMessage OUTPUT

SELECT	@responseMessage as N'@responseMessage'

-- Incorrect password
EXEC	dbo.uspLogin
		@pLoginName = N'Another', 
		@pPassword = N'1234',
		@responseMessage = @responseMessage OUTPUT

SELECT	@responseMessage as N'@responseMessage'