CREATE PROCEDURE dbo.uspDeleteReport 
  @pReportID       INT,
  @pUserID         INT,
  @responseMessage NVARCHAR(250) OUTPUT 
AS 
  BEGIN 
    SET nocount ON 
    BEGIN TRY 
      IF (SELECT reporter_id FROM Report WHERE id = @pReportID) = @pUserID
      BEGIN
        DECLARE @locationID INT = (SELECT location_id FROM Report WHERE id = @pReportID); -- Could also cascade delete
        DELETE FROM Report 
        WHERE id = @pReportID;
        DELETE 
        FROM Location 
        WHERE id = @locationID;
        SET @responseMessage='Success'
      END
      ELSE
        SET @responseMessage='Not permitted to delete this record'
    END TRY 
    BEGIN CATCH 
      SET @responseMessage=error_message() 
    END CATCH 
  END