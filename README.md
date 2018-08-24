# Saint-Gobain App

## Recommended setup

* Run local server with `npm run server`.

## Local server and database setup

### Postgres

To use PostgresQL locally, ensure it's installed on your machine by running `brew install postgresql`. Once instaled, follow [this link](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb) for a detailed list of instructions to set up local environment. Key points below:

* Start the Postgres CLI tool by running `psql postgres`. This starts the CLI which should change the input to start with `postgres=# `.
* Check current DB users by entering `postgres=# \du`.
* All new apps should have a new role created `postgres=# CREATE ROLE sg_admin WITH LOGIN PASSWORD 'pass';`.
  - NOTE: all queries run via the CLI tool *must* end with a ";".
* Once a role is created, the role must be accessed to create and update a database:
  - Open Postgres CLI tool with user role `psql postgres -U sg_admin`.
  - Create database for new role `postgres=# CREATE DATABASE sp_app;`.
  - Add new role for permission to access newly created DB `GRANT ALL PRIVILEGES ON DATABASE sg_app TO sg_admin;`.
* To check role and DB is created, list all databases `postgres=# \list`.
* All subsequent requests to update a database (such as creating schemas, doing queries etc.) require that the DB is connected to `/connect sg_app`.
* All subsequent requests via an application (in Node JS for example) must be done either directly to `pg` package, or via an ORM like `sequelize`, both of which will require providing credentials for DB and user role with a password.

### Sequelize

* Install sequelize globally to prevent error related to having to install mysql even though the dialect is pg in the config file. (GH issue: https://github.com/sequelize/sequelize/issues/6132)

### Running Migrations

* Run sequelize db:migrate


### Seeding test data into database

* Create seeder file by runing sequelize seed:generate --name [Seeder File Name]
* Edit the seeder file with the table to into the seed into and the data (An Example with be generated with the cmd above)
* You can then run sequelize db:seed:all to run all the seeders or sequelize db:seed --seed [seed file name] to run a specific seeder file
