DECLARE @responseMessage VARCHAR(250)

EXEC dbo.uspAddReport
          @pLatitude = N'60.2323',
          @pLongitude = N'24.2152',
          @pSubject = N'Test',
          @pDescription = N'Hello world',
          @pCity = N'Riihimäki',
          @pPostcode = N'11100',
          @pAddress = NULL,
          @responseMessage=@responseMessage OUTPUT