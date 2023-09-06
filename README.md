# CashTracker Backend
This is the backend of CashTracker, an application that provides a REST API for operations such as register, login, logout, upload, update, delete, and display expenses. It is built using Node.js, Express, and MongoDB.

## Requirements
Make sure you have the following installed before getting started:

- [Node.js](https://nodejs.org/en): The runtime environment.
- [MongoDB](https://www.mongodb.com/): The NoSQL database used for data storage.

## Configuration

1. Clone this repository to your local machine:

  `git clone https://github.com/tobiasNicolasN/cashTracker-Backend.git`
  
  `cd cashTracker-Backend`

2. Install project dependencies:
   
The dependencies used in this project are included in "package.json":

To install these dependencies, run:

  `npm install`

3. Locate the 'src/config.js' file in the project and configure the necessary environment variables:
   
  `PORT = 3000`

  `MONGODB_URI = "URL of your mongodb database"`

  `TOKEN_SECRET = "Your secret key for token"`

Make sure to replace MONGODB_URI with the URL of your MongoDB database and TOKEN_SECRET with a secure key for JWT token generation.

## Usage

1. Start the server:
  
  `npm start`

The server will run on the port specified in the config.js file (default is port 3000).

You can use tools like [Thunder Client](https://www.thunderclient.com/) to make HTTP requests to the API.

## API Endpoints

- "/api/register:" Register in the application.
- "/api/login:" Log-in to the application.
- "/api/logout:" Log-out of the application.
- "/api/profile:" Route for display user data.
- "/api/expenses:" Routes for upload and display expenses.
- "/api/expenses/id:" Routes for delete and update a specific expense.
