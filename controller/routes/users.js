var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Connect to DB
  // Change database filename if changed in init. 
  var db = new sqlite3.Database("model/IronMeteorite.db", (error) => {
    if (error) {
      next(error);
    } else {
      console.log("Connected to Iron Meteorite Database.");
    }
  });

  // Inserting mock data
  db.all("SELECT name, password FROM users", (err, rows) => {
    // Closing DB connection
    db.close();

    // If error
    // Pass error down middleware chain to error handler in app.js
    if (err) {
      next(err);
    } else {
      // If success
      // Render users template using query result rows
      res.render('users', {rows});
    }
  });
});

module.exports = router;
