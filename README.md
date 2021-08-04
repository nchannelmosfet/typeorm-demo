# Set up Node
## install typeorm globally
    npm install -g typeorm

## create typeorm project
    typeorm init

## update dependencies versions
    npm install -D typescript@latest ts-node@latest

# Set up Postgres
Install latest Postgres. 
psql exe found at: C:\Program Files\PostgreSQL\13\bin
<br>
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

# NPM
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

