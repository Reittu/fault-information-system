const sql = require('mssql')

const username = "user";
const password = "password";
const connectionString = "...";
const database = fis;

async function example() {
    try {
        await sql.connect(`mssql://${username}:${password}@${connectionString}/${database}');
        const result = await sql.query`select * from regions`;
        console.dir(result);
    } catch (err) {
	console.log(err);
    }
}

example();