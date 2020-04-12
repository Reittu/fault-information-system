DECLARE @responseMessage NVARCHAR(250)

EXEC dbo.uspAddUser
          @pLogin = N'Another',
          @pPassword = N'123',
          @responseMessage=@responseMessage OUTPUT