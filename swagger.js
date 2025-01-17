require('dotenv').config();
const swaggerAutogen = require('swagger-autogen')();

const isProduction = process.env.NODE_ENV === 'production';

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API to manage contacts',
  },
  host: isProduction ? process.env.SWAGGER_HOST : 'localhost:3000',
  schemes: [isProduction ? process.env.SWAGGER_SCHEME : 'http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generates swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
