import { Joi } from 'express-validation'

const myModelValidation = {
  getAll: {
    query: Joi.object({
      id: Joi.number().integer(),
      uuidStd: Joi.string().uuid({ version: ['uuidv4'] }),
      varchar255NotNull: Joi.string().max(255),
      integerUniqueNotNull: Joi.number().integer(),
      dateStdNow: Joi.date(),
      dateTime: Joi.date(),
      booleanStd: Joi.boolean(),
    }),
  },
  create: {
    body: Joi.object({
      varchar255NotNull: Joi.string().max(255).required(),
      integerUniqueNotNull: Joi.number().integer().required(),
      dateStdNow: Joi.date(),
      dateTime: Joi.date(),
      booleanStd: Joi.boolean(),
    }),
  },
  update: {
    params: Joi.object({
      id: Joi.number().integer().required(),
    }),
    body: Joi.object({
      varchar255NotNull: Joi.string().max(255).required(),
      integerUniqueNotNull: Joi.number().integer().required(),
      dateStdNow: Joi.date().required(),
      dateTime: Joi.date().required(),
      booleanStd: Joi.boolean().required(),
    }),
  },
  partialUpdate: {
    params: Joi.object({
      id: Joi.number().integer().required(),
    }),
    body: Joi.object({
      varchar255NotNull: Joi.string().max(255),
      integerUniqueNotNull: Joi.number().integer(),
      dateStdNow: Joi.date(),
      dateTime: Joi.date(),
      booleanStd: Joi.boolean(),
    }),
  },
  destroy: {
    params: Joi.object({
      id: Joi.number().integer().required(),
    }),
  },
}

export { myModelValidation }
