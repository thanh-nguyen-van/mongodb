
HOW TO USE SOME MONGO COMMAND LINE. 

1. Create a database: 
use mongodbname

2. Show list of databases.
show dbs

3. Copy a database to another database. 
 db.copyDadatabase('exsited_databasename','new_databasename')

4. Drop a database.
   Swtich to database 
     use databasename
   Drop a database. 
     db.dropDadatabase()

5. Restore mongoDB with folder dump. 
  mongorestore --host mongodb1.example.net --port 3017 --username user --password pass /opt/backup/mongodump-2013-10-24
