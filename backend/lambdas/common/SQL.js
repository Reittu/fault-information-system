const sql = require('mssql');

const username = process.env.DBUSER;
const password = process.env.DBPASS;
const connectionString = process.env.DBSTRING;
const database = process.env.DBNAME;

const connectAndQuery = async (queryCallback) => {
    try {
        await sql.connect(`mssql://${username}:${password}@${connectionString}/${database}`);
        return await queryCallback();
    } catch (err) {
	return err;
    }
}

const executeQuery = sql.query;
module.exports = { connectAndQuery, executeQuery };