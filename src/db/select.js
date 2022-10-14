const sql = require('mssql');

var config =
{
	host: 'pgb3.database.windows.net',
	user: 'pgb',
	password: 'SDOld0!mf;',
	server: 'pgb3.database.windows.net',
	database: 'pgb',
	port: 1433
};

// ssl: true

let data_query_table = {};

/*
 *
 */
data_query_table.selectData = (req, res) => {

		// connect to your database
    sql.connect(config, function (err) {

	    if (err) console.log(err);

	        // create Request object
	    var request = new sql.Request();
		var result = "";
		console.log("Value: ", req.query.value);
		str = 'SELECT * FROM people WHERE id=' + req.query.value;
		console.log(str);
		// query to the database and get the records
		result = request.query(str , function (err, data) {

			    if (err) console.log(err)

					for (i = 0; i < data.recordset.length; i++) {
						console.log('Row: ' + JSON.stringify(data.recordset[i]));
					}
					console.log('Done.');

			            // send records as a response
			    //res.send(recordset);

    		});
				//console.log(result);
	});
}

module.exports = data_query_table;
