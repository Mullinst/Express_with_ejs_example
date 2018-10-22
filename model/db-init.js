var sqlite3 = require('sqlite3').verbose();

// Define database file path
var filePath = "IronMeteorite.db"

// 
var db = new sqlite3.Database(filePath, (error) => {
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

db.run(sql);


// Inserting mock data
db.run("INSERT INTO users (name, password) VALUES ($name, $password)", {
          $name: "Fred",
          $password: "Butterbeer16"
      });

db.run("INSERT INTO users (name, password) VALUES ($name, $password)", {
          $name: "George",
          $password: "Nimbus2018"
      });

// Closing DB connection
db.close();