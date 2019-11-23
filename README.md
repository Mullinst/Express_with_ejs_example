# Express_with_ejs_example
Example app using ejs template engine to render views.

# Setup/Database customization:
This setup is using an sqlite3 database utilizing the sqlite3 node module. 
The .db is the database, sqlite is a single file database. 
The project includes the database created from the unaltered db-init.js.

To create a new db from scratch: Modify the db-init.js and then run `node db-init.js` to run the script.
You can change the filename and then create tables, etc. API Documentation for sqlite3 module can be found [here](https://github.com/mapbox/node-sqlite3/wiki/API) and a good beginer friendly tutorial on sqlite's flavor of SQL can be found here [here](https://www.tutorialspoint.com/sqlite/index.htm).

# Directory Structure:
- `controller` : Express.js app with routes.
- `model` : Database code
- `public` : Directory for static files. Currently only css stylesheets. Directory typically also contains directories for images and front-end js such as JQuery scripts.
- `views` : EJS templates that are rendered for the user to see.


# To Run Locally:
1. `npm install`
2. `npm start`
3. `browse to localhost:3000`
4. `control+c to interupt`

# To do:
- fix live reloading using nodemon later.
- Update docs
- user route to show db data


Packages:

Bootstrap (https://www.npmjs.com/package/bootstrap)
JQuery (https://www.npmjs.com/package/jquery)
Popper (https://www.npmjs.com/package/popper.js/v/1.14.3)
SQLite3 (https://www.npmjs.com/package/sqlite3)