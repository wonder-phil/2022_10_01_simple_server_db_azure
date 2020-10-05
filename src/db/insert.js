const mysql = require('mysql');

var config =
{
	host: 'myserver99.database.windows.net ',
	user: 'db99admin@myserver99',
	password: '8suddsk!3',
	database: 'db99',
	port: 3306,
	ssl: true
};

const conn = new mysql.createConnection(config);

conn.connect(
	function (err) {
		if (err) {
			console.log("!!! Cannot connect !!! Error:");
			throw err;
		}
		else {
			console.log("Connection established.");
			readData();
		}
	});

function insertData(){

		conn.query('INSERT INTO people (name, address, number) VALUES (?, ?, ?);', ['orange', 'one university plaza', 154],
				 function (err, results, fields) {
					 if (err) throw err;
		 console.log('Inserted ' + results.affectedRows + ' row(s).');
		 })
	 }

	   conn.end(
		   function (err) {
				if (err) throw err;
				else  console.log('Closing connection.')
		});
};
