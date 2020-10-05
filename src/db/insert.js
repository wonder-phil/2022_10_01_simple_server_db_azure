const sql = require('mssql');

var config =
{
	host: 'myserver99.database.windows.net',
	user: 'db99admin',
	password: '8suddsk!3',
	server: 'myserver99.database.windows.net',
	database: 'db99',
	port: 1433
};

// ssl: true

let data_query_table = {};

/*
 * 'INSERT INTO people (name, address, number) VALUES (?, ?, ?);', ['orange', 'one university plaza', 154]
 */
data_query_table.insertData = (req, res) => {

		// connect to your database
    sql.connect(config, function (err) {

	    if (err) console.log(err);

	        // create Request object
	    var request = new sql.Request();

			request.query('INSERT INTO people (name, address, number) VALUES (\'foo\', \'bar\', 99)',
				function (err, recordset) {

				    if (err) console.log(err)

						console.log('Done.');

				            // send records as a response
				    //res.send(recordset);

	    		});
	});
}

module.exports = data_query_table;
