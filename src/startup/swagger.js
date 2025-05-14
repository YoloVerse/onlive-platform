const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const express = require('express');

module.exports = function(app){
    const swaggerOptions = {
        swaggerDefinition: {
            openapi: '3.1.1',
            info: {
                title: 'Onlive API',
                version: '1.0.0',
                description: 'Onlive API documentation using Swagger',
            },
            servers: [
                {
                    url: `http://localhost:3000`,
                },
            ],
       components: {
         securitySchemes: {
             bearerAuth: {
                 type: 'http',
                 scheme: 'bearer',
                 bearerFormat: 'JWT', 
             },
         },
     },
     security: [{
        bearerAuth: []
      }]
    },
        apis: ['./src/routes/*.js'], // Path to your API docs
    };
 
    const swaggerDocs = swaggerJSDoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}