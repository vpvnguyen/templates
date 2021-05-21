const swaggerDocument = {
  swagger: '2.0',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    
    '/myModel/': {
      get: {
        summary: 'Lists all the myModels',
        tags: ['myModel'],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Returns a list',
            schema: {
              $ref: '#/definitions/MyModel',
            },
          },
        },
      },
      post: {
        summary: 'Creates a myModel',
        tags: ['myModel'],
        parameters: [
          {
            name: 'myModel',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateMyModel',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          201: {
            description: 'Returns a new myModel',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateMyModel',
            },
          },
        },
      },
    },
    '/myModel/{id}': {
      get: {
        summary: 'Gets a myModel by its primary key',
        tags: ['myModel'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Returns a myModel with primary key',
            schema: {
              $ref: '#/definitions/MyModel',
            },
          },
        },
      },
      delete: {
        summary: 'Deletes a myModel by its primary key',
        tags: ['myModel'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
        },
      },
      put: {
        summary: 'Overrides the values of a myModel',
        tags: ['myModel'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              $ref: '#/definitions/MyModel',
            },
          },
          {
            name: 'myModel',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateMyModel',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a myModel',
            schema: {
              $ref: '#/definitions/MyModel',
            },
          },
        },
      },
      patch: {
        tags: ['myModel'],
        summary: 'patch a myModel',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              $ref: '#/definitions/MyModel',
            },
          },
          {
            name: 'myModel',
            in: 'body',
            schema: {
              $ref: '#/createUpdateDef/CreateUpdateMyModel',
            },
          },
        ],
        responses: {
          200: {
            description: 'Returns a myModel and its partially overwritten values',
            schema: {
              $ref: '#/definitions/MyModel',
            },
          },
        },
      },
    },

  },
  definitions: {
    MyModel: {
      required: ['varchar255NotNull','integerUniqueNotNull',],
      properties: {
        id: {
          type: 'integer',
          format: 'int32',
          uniqueItems: true,
          readOnly: true,
        },
        uuidStd: {
          type: 'string',
          format: 'uuid',
          readOnly: true,
        },
        varchar255NotNull: {
          type: 'string',
          maxLength: 255,
        },
        integerUniqueNotNull: {
          type: 'integer',
          format: 'int32',
          uniqueItems: true,
        },
        dateStdNow: {
          type: 'string',
          format: 'date',
        },
        dateTime: {
          type: 'string',
          format: 'date-time',
        },
        booleanStd: {
          type: 'boolean',
        },
      },
    },

  },
  createUpdateDef: {
    CreateUpdateMyModel: {
      required: ['varchar255NotNull','integerUniqueNotNull',],
      properties: {
        id: {
          type: 'integer',
          format: 'int32',
          uniqueItems: true,
          readOnly: true,
        },
        uuidStd: {
          type: 'string',
          format: 'uuid',
          readOnly: true,
        },
        varchar255NotNull: {
          type: 'string',
          maxLength: 255,
        },
        integerUniqueNotNull: {
          type: 'integer',
          format: 'int32',
          uniqueItems: true,
        },
        dateStdNow: {
          type: 'string',
          format: 'date',
        },
        dateTime: {
          type: 'string',
          format: 'date-time',
        },
        booleanStd: {
          type: 'boolean',
        },
      },
    },

  },
};

export { swaggerDocument };
