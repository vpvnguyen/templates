# nodejs1416_mysql_eslint_graphql_docker_ghactions_fullexample app

This app was bootstrapped with [Imagine.ai](https://imagine.ai) 💛
> Imagine.ai is an app starter on steroids! 

### Run the app in terminal
1. Start a MySQL database server on your machine or in the cloud.
2. Set the following environment variables in your .env file

```
MYSQL_HOST=<address-where-database-running>
MYSQL_PORT=<port-where-database-running>
MYSQL_USER=<username-for-database>
MYSQL_DATABASE=<database-name>
MYSQL_PASSWORD=<password-to-database>
// root password is only needed if using docker
MYSQL_ROOT_PASSWORD=<root-password-to-database>
DB_DIALECT=mysql
```

3. Install packages and start the application server.

```
$ yarn install
$ yarn start
```

### Run the app inside a Docker container

Build the docker container and get it up and running.

```
$ docker-compose build
$ docker-compose up
```

### Make API calls against the server

Go to [http://localhost:8000/graphql](http://localhost:8000/graphql)

### Run admin bro dashboard

Go to [http://localhost:8000/admin](http://localhost:8000/admin)

### Run tests and check code coverage

```
$ yarn test
$ yarn coverage
```

### Lint your code

```
$ yarn lint
$ yarn format
```

### Learn More

1. Learn more about:
  - the [Node architecture choices](https://imagine.ai/docs/architecture-node) used.
  - the [best practices](https://imagine.ai/docs/best-practices) followed.

2. Imagine is in beta - here are the [known issues](https://imagine.ai/docs/known_issues) that we are working to fix.
