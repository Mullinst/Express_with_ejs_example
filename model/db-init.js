const sqlite3 = require('sqlite3').verbose();

// Define database file path
const filePath = "IronMeteorite.db"

// Init/connect to DB
const db = new sqlite3.Database(filePath, (error) => {
	// Callback function 
	if(error !== null){
		console.log("Error connecting to database.");
	} else {
		console.log("Connected to Iron Meteorite Database.");
	}
});

// User Table SQL
var sql = " CREATE TABLE IF NOT EXISTS users(" +
				"id INTEGER PRIMARY KEY AUTOINCREMENT," +
				"name TEXT," +
				"password TEXT)";

// Run query
db.run(sql, (err) => {
	console.log(err);
});


// Inserting mock data
db.run("INSERT INTO users (name, password) VALUES ($name, $password)", {
	$name: "Fred",
    $password: "Butterbeer16"
}, (err) => {
	console.log(err);
});

db.run("INSERT INTO users (name, password) VALUES ($name, $password)", {
	$name: "George",
	$password: "Nimbus2018"
}, (err) => {
	console.log(err);
});

// Closing DB connection
db.close((err) => {
	console.log('Failed to close database connection.');
});