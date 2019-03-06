# Bootcamp Connect
The purpose of this site is to provide 'kudos' to fellow employees when someone does a good job. It is posted on the homepage for all to see.

## Getting Started
To get started, click on the 'give kudos' button to write out a kudos for a fellow employee. Populate all fields and click 'Send Kudos!' button to generate a kudo for that person. 


## API Routes Documentation
DB is built with Mongo. All data is stored and returned as json documents.

### All Routes
- POST /api/users
   - req.body: {
       username
   }
   - stores username. this is what is displayed in the Kudos 'From' and 'To' lists

- GET /api/users
   - returns all users.

- GET /api/kudos
    - Returns all kudos. This is what is displayed on the homepage.


