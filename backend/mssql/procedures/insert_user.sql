CREATE PROCEDURE dbo.uspAddUser 
@pUsername nvarchar(50),
@pName nvarchar(70),
@pEmail nvarchar(255),
@responseMessage nvarchar(250) OUTPUT
AS
BEGIN
	SET NOCOUNT ON
	BEGIN TRY
		INSERT INTO Reporter (Username, Name, Email)
			VALUES (@pUsername, @pName, @pEmail)
		SET @responseMessage = 'Success'
	END TRY
	BEGIN CATCH
		SET @responseMessage = ERROR_MESSAGE()
	END CATCH
END