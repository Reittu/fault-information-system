SELECT Report.id,subject,description,latitude,longitude,c.name as city,postcode,address,username as reporter 
FROM Report
INNER JOIN Reporter r on r.id = reporter_id
INNER JOIN Location l on l.id = location_id
INNER JOIN City c on c.id = l.city_id;