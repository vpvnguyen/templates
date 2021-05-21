# templates

Collection of scaffolding templates

## Nodejs Service Architecture

- Goal is to completely extract and separate business logic from the API
- Business logic should not be present in routes or controllers

### File Structure

```
src
│   index.js        # Entry point for application
└───config          # Application environment variables and secrets
└───controllers     # Express controllers for routes, respond to client requests, call services
└───loaders         # Handles all startup processes
└───middlewares     # Operations that check or maniuplate request prior to controller utilizing
└───models          # Database models
└───routes          # Express routes that define API structure
└───services        # Encapsulates all business logic
└───test            # Tests go here
```

### 3-Layer Architecture

1. Controllers receive incoming client requests, and they leverage services
2. Services contain all business logic, and can also make calls to the data access layer
3. The data access layer interacts with the database by performing queries
4. Results are passed back up to the service layer
5. The service layer can then hand everything back to the controller
6. The controller can then respond to the client!

### Service Layer

The Service Layer SHOULD:

- Contain business logic
- Leverage the data access layer to interact with the database
- Be framework agnostic

The Service Layer SHOULD NOT:

- Be provided the req or res objects
- Handle responding to clients
- Provide anything related to HTTP Transport layer; status codes, headers, etc.
- Directly interact with the database

### Controller Layer

- Responsible for handling client requests and responses
- Leverage services by passing the data that they need, not the `req` or `res` object themselves
- Enables our services to remain framework agnostic
