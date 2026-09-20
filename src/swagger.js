import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My API',
    description: 'Auto-generated API docs',
    version: '1.0.0',
  },
  servers: [{ url: 'http://localhost:3000' }],
};

const outputFile = './swagger-output.json';
const routes = ['./app.js']; // entry file(s) that register your routes

// Note: swaggerAutogen is called twice: once for options, once to generate
swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc);
