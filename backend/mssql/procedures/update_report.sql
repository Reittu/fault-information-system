CREATE PROCEDURE dbo.uspUpdateReport 
  @pReportID       INT,
  @pUserID         INT,
  @pSubject        NVARCHAR(50), 
  @pDescription    NVARCHAR(500),
  @responseMessage NVARCHAR(250) OUTPUT 
AS 
  BEGIN 
    SET nocount ON 
    BEGIN TRY 
      UPDATE Report 
      SET subject = @pSubject, description = @pDescription
      WHERE id = @pReportID AND reporter_id = @pUserID
      SET @responseMessage='Success'
    END try 
    BEGIN catch 
      SET @responseMessage=error_message() 
    END catch 
  END