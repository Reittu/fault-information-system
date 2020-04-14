DECLARE @responseMessage NVARCHAR(250)

EXEC dbo.uspAddReport
		  @pUserID = 2,
          @pLatitude = 61.3056512,
          @pLongitude = 23.740416,
		  @pSubject = N'Example location',
		  @pDescription = N'Example location at Forssa.',
		  @pCity = N'Forssa',
		  @pPostcode = N'30300',
		  @pAddress = NULL,
          @responseMessage=@responseMessage OUTPUT

SELECT	@responseMessage as N'result'