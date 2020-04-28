DECLARE @responseMessage NVARCHAR(250)

EXEC dbo.uspAddUser
          @pUsername N'Another',
          @pName 'Example Name',
          @pEmail 'example@email.com',
          @responseMessage=@responseMessage OUTPUT

SELECT	@responseMessage as N'result'