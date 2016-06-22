

### Install docker postgres container

`docker run --name postgres_graphql -p 5432:5432 -e POSTGRES_USER=graphql -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=todo -d postgres`


### Run the migrations

`node_modules/.bin/sequelize db:migrate`


### Run the node server
`npm run supervisor`