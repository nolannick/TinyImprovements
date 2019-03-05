# Bootcamp Connect
The purpose of this site is to...

## Getting Started
To get started...


## API Routes Documentation
DB is built with Mongo. All data is stored and returned as json documents.

### Registration/Login Routes
- POST /api/users/registration
   - req.body: {
       username,
       password,
       cohortId
   }
   - stores username, hashed password, salt, and cohortId in User collection
   - Username is required to be email address
   - responds with newly created user item

