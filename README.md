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

path to keystone /admin/keystone

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
run mongodb

mongod --dbpath data/db/ --logpath data/logs/mongodb.log --logappend

use mongodb under data/db
--logappend -ads to log instead of overwriting

access mongo in shell : mongo