const swaggerDocument = {
  swagger: '2.0',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {},
  definitions: {
    MyModel: {
      required: ['varchar255NotNull', 'integerUniqueNotNull'],
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
      required: ['varchar255NotNull', 'integerUniqueNotNull'],
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
}

export { swaggerDocument }
