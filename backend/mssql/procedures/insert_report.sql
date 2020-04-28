CREATE PROCEDURE dbo.uspDeleteReport 
@pReportID int,
@pUsername nvarchar(50),
@responseMessage nvarchar(250) OUTPUT
AS
BEGIN
	SET NOCOUNT ON
	BEGIN TRY
		DECLARE @ReporterID int = (SELECT TOP 1 id FROM Reporter WHERE username = @pUsername)
		IF @ReporterID IS NULL
			SET @responseMessage = 'This reporter does not exist'
		ELSE
		IF (SELECT TOP 1 reporter_id FROM Report WHERE id = @pReportID) = @ReporterID
		BEGIN
			DECLARE @locationID int = (SELECT TOP 1 location_id FROM Report WHERE id = @pReportID); -- Could also cascade delete
			DELETE FROM Report WHERE id = @pReportID;
			DELETE FROM Location WHERE id = @locationID;
			SET @responseMessage = 'Success'
		END
		ELSE
			SET @responseMessage = 'Not permitted to delete this record'
	END TRY
	BEGIN CATCH
		SET @responseMessage = ERROR_MESSAGE()
	END CATCH
END