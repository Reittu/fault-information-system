CREATE PROCEDURE dbo.uspLogin
    @pLoginName NVARCHAR(50),
    @pPassword NVARCHAR(50),
    @responseMessage NVARCHAR(250)='' OUTPUT
AS
BEGIN
    SET NOCOUNT ON
    DECLARE @userID INT

    IF EXISTS (SELECT TOP 1 id FROM Reporter WHERE Username=@pLoginName)
    BEGIN
        SET @userID=(SELECT id FROM Reporter WHERE Username=@pLoginName AND Password=HASHBYTES('SHA2_512', @pPassword+CAST(Salt AS NVARCHAR(36))))
        IF(@userID IS NULL)
           SET @responseMessage='Incorrect password'
        ELSE 
           SET @responseMessage='User successfully logged in'
    END
    ELSE
       SET @responseMessage='Invalid login'
END
