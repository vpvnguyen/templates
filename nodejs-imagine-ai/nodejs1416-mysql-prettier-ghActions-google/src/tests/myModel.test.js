import request from 'supertest'
import { buildMyModel, createMyModel } from './factories'
import { startDatabase } from './utils'
import { MyModel } from 'data/models'
import { app } from 'server/app'

const ENDPOINT = '/myModel'

describe('MyModel tests', () => {
  beforeEach(async () => {
    await startDatabase()
  })

  afterAll(async () => {
    await app.close()
  })

  test('/POST - Response with a new created myModel', async () => {
    const fakeMyModel = await buildMyModel({})

    const response = await request(app).post(ENDPOINT).send(fakeMyModel)

    expect(response.status).toBe(201)
    expect(response.statusCode).toBe(201)

    const responseMyModel = response.body.data

    const myModel = await MyModel.findByPk(responseMyModel.id)

    expect(myModel.varchar255NotNull).toBe(fakeMyModel.varchar255NotNull)
    expect(myModel.integerUniqueNotNull).toBe(fakeMyModel.integerUniqueNotNull)
    expect(myModel.dateStdNow).toBe(fakeMyModel.dateStdNow)
    expect(myModel.dateTime.toJSON()).toEqual(fakeMyModel.dateTime)
    expect(myModel.booleanStd).toBe(fakeMyModel.booleanStd)
  })

  test('/GET - Response with a myModel', async () => {
    const myModelDict = await buildMyModel({})
    const fakeMyModel = await createMyModel(myModelDict)

    const response = await request(app).get(`${ENDPOINT}/${fakeMyModel.id}`)

    const { statusCode, status } = response
    const { data } = response.body

    expect(status).toBe(200)
    expect(statusCode).toBe(200)

    expect(data.id).toBe(fakeMyModel.id)
    expect(data.uuidStd).toBe(fakeMyModel.uuidStd)
    expect(data.varchar255NotNull).toBe(fakeMyModel.varchar255NotNull)
    expect(data.integerUniqueNotNull).toBe(fakeMyModel.integerUniqueNotNull)
    expect(data.dateStdNow).toBe(fakeMyModel.dateStdNow)
    expect(data.dateTime).toBe(fakeMyModel.dateTime.toJSON())
    expect(data.booleanStd).toBe(fakeMyModel.booleanStd)
  })

  test('/GET - Response with a myModel not found', async () => {
    const myModelDict = await buildMyModel({})
    const fakeMyModel = await createMyModel(myModelDict)
    const { id } = fakeMyModel
    await fakeMyModel.destroy()

    const response = await request(app).get(`${ENDPOINT}/${id}`)
    const { statusCode } = response
    expect(statusCode).toBe(404)
  })

  test('/GET - Response with a list of myModels', async () => {
    const response = await request(app).get(ENDPOINT)

    const { statusCode, status } = response
    const { data } = response.body

    expect(status).toBe(200)
    expect(statusCode).toBe(200)

    const allMyModel = await MyModel.findAll()
    expect(data.length).toBe(allMyModel.length)
  })

  test('/PUT - Response with an updated myModel', async () => {
    const myModelDict = await buildMyModel({})
    const fakeMyModel = await createMyModel(myModelDict)

    const anotherFakeMyModel = await buildMyModel({})

    const response = await request(app).put(`${ENDPOINT}/${fakeMyModel.id}`).send({
      varchar255NotNull: anotherFakeMyModel.varchar255NotNull,
      integerUniqueNotNull: anotherFakeMyModel.integerUniqueNotNull,
      dateStdNow: anotherFakeMyModel.dateStdNow,
      dateTime: anotherFakeMyModel.dateTime,
      booleanStd: anotherFakeMyModel.booleanStd,
    })

    const { status } = response
    const { data } = response.body

    expect(status).toBe(200)
    expect(response.statusCode).toBe(200)

    expect(data.varchar255NotNull).toBe(anotherFakeMyModel.varchar255NotNull)
    expect(data.integerUniqueNotNull).toBe(anotherFakeMyModel.integerUniqueNotNull)
    expect(data.dateStdNow).toBe(anotherFakeMyModel.dateStdNow)
    expect(data.dateTime).toBe(anotherFakeMyModel.dateTime)
    expect(data.booleanStd).toBe(anotherFakeMyModel.booleanStd)

    const updatedMyModel = await MyModel.findByPk(fakeMyModel.id)

    expect(updatedMyModel.varchar255NotNull).toBe(anotherFakeMyModel.varchar255NotNull)
    expect(updatedMyModel.integerUniqueNotNull).toBe(anotherFakeMyModel.integerUniqueNotNull)
    expect(updatedMyModel.dateStdNow).toBe(anotherFakeMyModel.dateStdNow)
    expect(updatedMyModel.dateTime.toJSON()).toEqual(anotherFakeMyModel.dateTime)
    expect(updatedMyModel.booleanStd).toBe(anotherFakeMyModel.booleanStd)
  })

  test('/PUT - MyModel does not exists, myModel cant be updated', async () => {
    const myModelDict = await buildMyModel({})
    const fakeMyModel = await createMyModel(myModelDict)
    const { id } = fakeMyModel
    await fakeMyModel.destroy()

    const response = await request(app).put(`${ENDPOINT}/${id}`).send({
      varchar255NotNull: myModelDict.varchar255NotNull,
      integerUniqueNotNull: myModelDict.integerUniqueNotNull,
      dateStdNow: myModelDict.dateStdNow,
      dateTime: myModelDict.dateTime,
      booleanStd: myModelDict.booleanStd,
    })

    const { statusCode } = response
    expect(statusCode).toBe(404)
  })

  test('/PATCH - Response with an updated myModel (no updates)', async () => {
    const myModelDict = await buildMyModel({})
    const fakeMyModel = await createMyModel(myModelDict)

    const response = await request(app).patch(`${ENDPOINT}/${fakeMyModel.id}`).send({})

    const { status } = response

    expect(status).toBe(200)
    expect(response.statusCode).toBe(200)
  })

  test('/PATCH - Response with an updated myModel', async () => {
    const myModelDict = await buildMyModel({})
    const fakeMyModel = await createMyModel(myModelDict)

    const anotherFakeMyModel = await buildMyModel({})

    const response = await request(app)
      .patch(`${ENDPOINT}/${fakeMyModel.id}`)
      .send({ uuidStd: anotherFakeMyModel.uuidStd })

    const { status } = response
    const { data } = response.body

    expect(status).toBe(200)
    expect(response.statusCode).toBe(200)

    expect(data.uuidStd).toBe(anotherFakeMyModel.uuidStd)

    const updatedMyModel = await MyModel.findByPk(fakeMyModel.id)

    expect(updatedMyModel.uuidStd).toBe(anotherFakeMyModel.uuidStd)
  })

  test('/PATCH - MyModel does not exists, myModel cant be updated', async () => {
    const myModelDict = await buildMyModel({})
    const fakeMyModel = await createMyModel(myModelDict)
    const { id } = fakeMyModel
    const uuidStd = fakeMyModel.uuidStd
    await fakeMyModel.destroy()

    const response = await request(app).patch(`${ENDPOINT}/${id}`).send({ uuidStd: uuidStd })

    const { statusCode } = response
    expect(statusCode).toBe(404)
  })

  test('/DELETE - Response with a deleted myModel', async () => {
    const myModelDict = await buildMyModel({})
    const fakeMyModel = await createMyModel(myModelDict)

    const response = await request(app).delete(`${ENDPOINT}/${fakeMyModel.id}`)

    const { status } = response
    const { data } = response.body

    expect(status).toBe(200)
    expect(response.statusCode).toBe(200)

    expect(data.id).toBe(fakeMyModel.id)

    const deletedMyModel = await MyModel.findByPk(fakeMyModel.id)
    expect(deletedMyModel).toBe(null)
  })

  test('/DELETE - MyModel does not exists, myModel cant be deleted', async () => {
    const myModelDict = await buildMyModel({})
    const fakeMyModel = await createMyModel(myModelDict)
    const { id } = fakeMyModel
    await fakeMyModel.destroy()

    const response = await request(app).delete(`${ENDPOINT}/${id}`)

    const { statusCode } = response
    expect(statusCode).toBe(404)
  })
})
