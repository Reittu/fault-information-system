DECLARE @responseMessage NVARCHAR(250)

EXEC dbo.uspAddUser
          @pUsername = N'Another',
          @pName = N'Example Name',
          @pEmail = N'example@email.com',
          @responseMessage=@responseMessage OUTPUT

SELECT	@responseMessage as N'result'