const sql = require('mssql');

var config =
{
	host: 'myserver99.database.windows.net ',
	user: 'db99admin@myserver99',
	password: '8suddsk!3',
	database: 'db99',
	port: 3306,
	ssl: true
};

/*
 * 'INSERT INTO people (name, address, number) VALUES (?, ?, ?);', ['orange', 'one university plaza', 154]
 */
function insertData(){

		// connect to your database
    sql.connect(config, function (err) {

	    if (err) console.log(err);

	        // create Request object
	    var request = new sql.Request();

	        // query to the database and get the records
	    request.query('select * from people', function (err, recordset) {

			    if (err) console.log(err)

			            // send records as a response
			    res.send(recordset);

    		});
	});
}
