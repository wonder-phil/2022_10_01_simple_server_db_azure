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

					for (i = 0; i < recordset.length; i++) {
						console.log('Row: ' + JSON.stringify(recordset[i]));
					}
					console.log('Done.');

			            // send records as a response
			    res.send(recordset);

    		});

				request.query('INSERT INTO people (name, address, number) VALUES ("foo", "bar", 99)',
				function (err, recordset) {

				    if (err) console.log(err)

						console.log('Done.');

				            // send records as a response
				    res.send(recordset);

	    		});
	});
}
