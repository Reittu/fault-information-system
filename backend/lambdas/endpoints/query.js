const Responses = require('../common/API_Responses');
const { withHooks } = require('../common/hooks');
const { dbQuery } = require('../common/db_query');

const handler = async event => {
  const data = await dbQuery`
  SELECT Report.id,subject,description,latitude,longitude,c.name as city,postcode,address,username as reporter 
  FROM Report
  INNER JOIN Reporter r on r.id = reporter_id
  INNER JOIN Location l on l.id = location_id
  INNER JOIN City c on c.id = l.city_id;
  `
  return Responses._200({ message: JSON.stringify(data)});
};

exports.handler = withHooks(handler);