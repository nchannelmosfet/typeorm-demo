# Set up Project
## install typeorm globally
    npm install -g typeorm

## create typeorm project
    typeorm init

## install/update dependencies
    npm install -D typescript@latest ts-node@latest nodemon
    npm i -D @types/express
    npm i express
    npm i uuid


# Set up Postgres
Install latest Postgres. 
psql exe found at: C:\Program Files\PostgreSQL\13\bin

Add this path the path variable "C:\Program Files\PostgreSQL\13\bin"

## login superuser postgres
    psql -U postgres

## create additional user in psql
    psql=# create user <user> with superuser password '<pwd>';

## create database for user, in terminal
    createdb <user>

## login psql as <user>
    psql -U <user>

## Create database
    CREATE DATABASE <database_name>;

## connect to <database_name>
    \c <database_name>

## display tables
    \d
## display schema of a table
    \d <table_name>

# NPM Scripts
## run scripts in package.json
    npm <script_name>

## drop schema using typeorm cli (drop tables built from entities)
    npm run typeorm schema:drop

## sync schema using typeorm cli (create tables from entities)
    npm run typeorm schema:sync

### assumes this is set in package.json
    "scripts": {
        "typeorm": "ts-node ./node_modules/typeorm/cli.js"
    }

## Load Environment Variables
"ormconfig.json" is created as a default config file for TypeORM. 
However, since json files have no notions of environment variables. It's insecure to put database username and password in it. 

Refer to the doc https://typeorm.io/#/using-ormconfig/using-environment-variables and use <strong>.env, ormconfig.env or ormconfig.js instead. </strong> Remember to gitignore the config file that contains sensitive information. 

Note: TypeORM will load only the first valid config method and cannot use multiple config files simultaneously. 
