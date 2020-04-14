CREATE PROCEDURE dbo.uspAddReport 
  @pUserID         INT,
  @pLatitude       DECIMAL(8,6), 
  @pLongitude      DECIMAL(9,6), 
  @pSubject        NVARCHAR(50), 
  @pDescription    NVARCHAR(500), 
  @pCity           NVARCHAR(200), 
  @pPostcode       VARCHAR(15), 
  @pAddress        NVARCHAR(255), 
  @responseMessage NVARCHAR(250) OUTPUT 
AS 
  BEGIN 
    SET nocount ON 
    BEGIN TRY 
      DECLARE @INSERTED TABLE 
                  ( 
                              id int 
                  ); 
       
      INSERT INTO Location 
                  ( 
                              city_id, 
                              latitude, 
                              longitude, 
                              postcode, 
                              address 
                  ) 
                  OUTPUT inserted.id 
      INTO        @inserted VALUES 
                  ( 
                  ( 
                         SELECT TOP 1 
                                id 
                         FROM   city 
                         WHERE  NAME = @pCity 
                  ) 
                  , 
                  @pLatitude, 
                  @pLongitude, 
                  @pPostcode, 
                  @pAddress 
                  ); 
       
      INSERT INTO Report 
                  ( 
                              reporter_id, 
                              location_id, 
                              subject, 
                              description 
                  ) 
                  VALUES 
                  ( 
                              @pUserID, 
                              ( 
                                     SELECT TOP 1 id 
                                     FROM   @inserted), 
                              @pSubject, 
                              @pDescription 
                  ); 
       
      SET @responseMessage=SCOPE_IDENTITY()
    END TRY 
    BEGIN CATCH 
      SET @responseMessage=error_message() 
    END CATCH 
  END