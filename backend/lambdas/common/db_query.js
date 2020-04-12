const sql = require('mssql');

const username = process.env.DBUSER;
const password = process.env.DBPASS;
const connectionString = process.env.DBSTRING;
const database = 'fis';

const dbQuery = async (query) => {
    try {
        await sql.connect(`mssql://${username}:${password}@${connectionString}/${database}`);
        const result = await sql.query`${query}`;
        console.dir(result);
    } catch (err) {
	console.log(err);
    }
}

module.exports = { dbQuery };