import { CREATED } from 'http-status'
import { MyModelService } from 'server/services'
import { NotFound } from 'utils/errors/NotFound'

class MyModelController {
  static async create(req, res, next) {
    try {
      const { varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd } = req.body
      const newMyModel = await MyModelService.create(
        varchar255NotNull,
        integerUniqueNotNull,
        dateStdNow,
        dateTime,
        booleanStd
      )
      res.locals.status = CREATED
      res.locals.data = newMyModel
      return next()
    } catch (error) {
      return next(error)
    }
  }

  static async get(req, res, next) {
    try {
      const { id } = req.params
      const myModelObject = await MyModelService.get(id)
      if (!myModelObject) {
        throw new NotFound(`MyModel with primary key ${id} not found`)
      }
      res.locals.data = myModelObject
      return next()
    } catch (error) {
      return next(error)
    }
  }

  static async getAll(req, res, next) {
    try {
      const filters = { ...req.query }
      const allMyModels = await MyModelService.getAll(filters)
      res.locals.data = allMyModels
      return next()
    } catch (error) {
      return next(error)
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params
      const { varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd } = req.body

      const updatedMyModel = await MyModelService.update(
        id,
        varchar255NotNull,
        integerUniqueNotNull,
        dateStdNow,
        dateTime,
        booleanStd
      )

      res.locals.data = updatedMyModel
      return next()
    } catch (error) {
      return next(error)
    }
  }

  static async partialUpdate(req, res, next) {
    try {
      const { id } = req.params
      const { varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd } = req.body

      const updatedMyModel = await MyModelService.partialUpdate(
        id,
        varchar255NotNull,
        integerUniqueNotNull,
        dateStdNow,
        dateTime,
        booleanStd
      )

      res.locals.data = updatedMyModel
      return next()
    } catch (error) {
      return next(error)
    }
  }

  static async destroy(req, res, next) {
    try {
      const { id } = req.params
      const myModelDelete = await MyModelService.destroy(id)
      res.locals.data = myModelDelete
      return next()
    } catch (error) {
      return next(error)
    }
  }
}

export { MyModelController }
