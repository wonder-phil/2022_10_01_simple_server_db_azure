const mysql = require('mysql');

var config =
{
	host: 'mydemoserver.mysql.database.azure.com',
	user: 'myadmin@mydemoserver',
	password: 'your_password',
	database: 'quickstartdb',
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
			updateData();
		}	
	});

function updateData(){
	   conn.query('UPDATE inventory SET quantity = ? WHERE name = ?', [200, 'banana'], 
			function (err, results, fields) {
				if (err) throw err;
				else console.log('Updated ' + results.affectedRows + ' row(s).');
	   	})
	   conn.end(
		   function (err) { 
				if (err) throw err;
				else  console.log('Done.') 
		});
};
