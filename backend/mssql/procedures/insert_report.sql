CREATE PROCEDURE dbo.uspAddReport 
@pUsername nvarchar(50),
@pLatitude decimal(8, 6),
@pLongitude decimal(9, 6),
@pSubject nvarchar(50),
@pDescription nvarchar(500),
@pCity nvarchar(200),
@pPostcode varchar(15),
@pAddress nvarchar(255),
@responseMessage nvarchar(250) OUTPUT
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @ReporterID int = (SELECT TOP 1 id FROM reporter WHERE username = @pUsername)

	IF @ReporterID IS NULL
		SET @responseMessage = 'This reporter does not exist'
	ELSE
	BEGIN TRY
		DECLARE @INSERTED TABLE (
			id int
		);

		INSERT INTO Location (city_id,
		latitude,
		longitude,
		postcode,
		address)
		OUTPUT INSERTED.id
		INTO @inserted
			VALUES ((SELECT TOP 1 id FROM city WHERE NAME = @pCity), @pLatitude, @pLongitude, @pPostcode, @pAddress);

		INSERT INTO Report (reporter_id,
		location_id,
		subject,
		description)
			VALUES (@ReporterID, (SELECT TOP 1 id FROM @inserted), @pSubject, @pDescription);

		SET @responseMessage = SCOPE_IDENTITY()
	END TRY
	BEGIN CATCH
		SET @responseMessage = ERROR_MESSAGE()
	END CATCH
END