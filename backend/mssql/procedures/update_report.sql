CREATE PROCEDURE dbo.uspUpdateReport 
@pReportID int,
@pUsername nvarchar(50),
@pSubject nvarchar(50),
@pDescription nvarchar(500),
@responseMessage nvarchar(250) OUTPUT
AS
BEGIN
	SET NOCOUNT ON

	DECLARE @ReporterID int = (SELECT TOP 1 id FROM reporter WHERE username = @pUsername)
  
	IF @ReporterID IS NULL
		SET @responseMessage = 'This reporter does not exist'
	ELSE
    BEGIN TRY
      UPDATE report
      SET	subject = @pSubject,
          description = @pDescription
      WHERE id = @pReportID
      AND reporter_id = @ReporterID

      SET @responseMessage = 'Success'
    END TRY

    BEGIN CATCH
      SET @responseMessage = ERROR_MESSAGE()
    END CATCH
END