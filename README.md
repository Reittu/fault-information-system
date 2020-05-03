# Fault Information System

Mapbox GL based application that allows users to report infrastructural faults interactively either as an anonymous or authenticated user. 

## Architecture (system structure)

* Backend (AWS)
    * MSSQL database (RDS)
    * API Gateway
        * 4 Lambdas to interact with the RDS
    * Cognito (authentication)
        * Cognito trigger Lambda to update MSSQL database's user table (inside VPC as it does not need internet access; no NAT gateway for now)

* Frontend
    * React
    * Redux
    * Mapbox GL
    * Material-UI

## Forking

To copy this project, you will need Serverless and AWS account as well as a Mapbox GL API token.

The root directory should contain a `.env.local` file with `REACT_APP_MAPBOX_TOKEN` variable declared.

The backend directory should contain a `db.env.json` file with `DBUSER`, `DBPASS`, `DBSTRING` and `DBNAME` variables filled according to the database credentials.

Tables, indexes, procedures and the initial data queries for the database can be copied from the `backend/mssql` directory.

![Example image](https://github.com/Reittu/fault-information-system/blob/master/example.png "Example image")
