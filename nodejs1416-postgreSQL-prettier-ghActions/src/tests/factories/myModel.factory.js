import { datatype, date, random } from 'faker'
import { MyModel } from 'data/models'
import { dateToUTC } from 'server/utils/functions'

const buildMyModel = async (myModelFks) => {
  const resMyModel = {}

  resMyModel.varchar255NotNull = random.word().slice(0, 255)
  resMyModel.integerUniqueNotNull = datatype.number()
  resMyModel.dateStdNow = dateToUTC(date.past()).format('YYYY-MM-DD')
  resMyModel.dateTime = dateToUTC(date.past()).format('YYYY-MM-DDTHH:mm:ss[.000Z]')
  resMyModel.booleanStd = datatype.boolean()

  return resMyModel
}

const createMyModel = async (fakeMyModel) => {
  const myModel = await MyModel.create(fakeMyModel)
  return myModel
}

export { buildMyModel, createMyModel }
