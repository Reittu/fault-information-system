CREATE PROCEDURE dbo.uspAddReport 
  @pLatitude       DECIMAL(8,6), 
  @pLongitude      DECIMAL(9,6), 
  @pSubject        VARCHAR(50), 
  @pDescription    VARCHAR(500), 
  @pCity           VARCHAR(200), 
  @pPostcode       VARCHAR(15), 
  @pAddress        VARCHAR(255), 
  @responseMessage VARCHAR(250) OUTPUT 
AS 
  BEGIN 
    SET nocount ON 
    BEGIN try 
      DECLARE @INSERTED TABLE 
                  ( 
                              id int 
                  ); 
       
      insert INTO location 
                  ( 
                              city_id, 
                              latitude, 
                              longitude, 
                              postcode, 
                              address 
                  ) 
                  output inserted.id 
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
       
      insert INTO report 
                  ( 
                              reporter_id, 
                              location_id, 
                              subject, 
                              description 
                  ) 
                  VALUES 
                  ( 
                              2, 
                              ( 
                                     SELECT TOP 1 
                                            id 
                                     FROM   @inserted), 
                              @pSubject, 
                              @pDescription 
                  ); 
       
      SET @responseMessage='Success'
    END try 
    BEGIN catch 
      SET @responseMessage=error_message() 
    END catch 
  END