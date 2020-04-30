## Current infrastructure

* MSSQL database (RDS)
* API Gateway
    * 4 Lambdas to interact with RDS
* Cognito
    * Cognito trigger Lambda to update MSSQL database's user table (inside VPC as it does not need internet access; no NAT gateway for now)

## Future possibilities

* RDS Proxy to improve connection times (connection pool handling); costs per hour so not implementing for demo purposes. Currently in preview (not support for MSSQL)
* Go back to using VPC (improve security); need to use a NAT gateway (can't setup on student account and it has quite steep cost/hour)
    * Steps include: removing whitelist (::0) from RDS's Security Group (inbound), change to VPC CIDR, create NAT gateway, put all Lambdas inside VPC's whitelisted subnet(s). 
