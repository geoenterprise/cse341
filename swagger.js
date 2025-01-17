require('dotenv').config();
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API to manage contacts',
  },
  host: process.env.SWAGGER_HOST || 'localhost:3000',
  schemes: [process.env.SWAGGER_SCHEME || 'http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];

// generates swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
