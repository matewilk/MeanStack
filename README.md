MeanStack
=========

MongoDb, Express, Angular, Node stack for quick project scaffolding 

This is skeleton for quick start with Angular and Express app.

(you need to have ruby, rubygems, sass, compass, nodemon installed)

========
for using keysonejs you need to have mongoose and mongodb installed

all commands run in server dir:

npm install mongoose --save
npm install mongodb --save
npm install bcrypt --save (mongo dependecy for passwords)

path to keystone (http://localhost:3000)/admin/keystone

Details about how KeystoneJs is mounted into app can be found here

[This link](https://github.com/keystonejs/keystone#mounting-keystone-as-a-sub-app-or-creating-a-node-module-out-of-your-keystone-project)

========
After cloning repo run following commands

inside /client direcotry

- npm grunt install
- npm install
- bower install

========
For running grunt open client folder in command line and type: grunt serve, this will start grunt server on port 9000

For running express server, open server folder in command line, and type: npm test (for test env) or npm start (for dist), this one will run on port 3000

After this two operations you will have two servers running on different ports. Open up localhost:3000 to be able to watch all (front-end as well as back-end) changes.

========
<--
NOT actuall at the moment
run mongodb

mongod --dbpath data/db/ --logpath data/logs/mongodb.log --logappend

use mongodb under data/db
--logappend -ads to log instead of overwriting

access mongo in shell : mongo
-->

inside /admin directory .env file has mongod set to (or should have it set to) :

MONGO_URI=mongodb://localhost/admin

it means that if you have mongo installed, it will connect to "admin" database
if database "admin" does not exists /admin/updates/0.0.1-admin.js script will run automatically creating Admin user
You can change Admin credentials by changing this update script.

Note: You can also use this script to create any other necessary data for your app.
