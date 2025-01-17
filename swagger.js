require('dotenv').config();
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API to manage contacts',
  },
  host:
    process.env.MODE === 'production'
      ? process.env.SWAGGER_HOST
      : 'localhost:3000',

  schemes: ['http', process.env.SWAGGER_SCHEME || 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generates swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
