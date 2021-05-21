import request from 'supertest';
import { toGlobalId, fromGlobalId } from 'graphql-relay';
import { buildMyModel, createMyModel } from './factories';
import { startDatabase, deleteDatabase, ENDPOINT } from './utils';
import { sequelize, MyModel } from 'data/models';
import { app } from 'server/app';

describe('MyModel tests', () => {
  beforeEach(async () => {
    await startDatabase();
  });
  
  test('Create - Response with a new myModel', async () => {

    const fakeMyModel = await buildMyModel({
    });

    const response = await request(app)
      .post(ENDPOINT)
      .send({
        query: `mutation {
                    createMyModel ( input: {
                      varchar255NotNull: "${fakeMyModel.varchar255NotNull}",
                      integerUniqueNotNull: ${fakeMyModel.integerUniqueNotNull},
                      dateStdNow: "${fakeMyModel.dateStdNow}",
                      dateTime: "${fakeMyModel.dateTime}",
                      booleanStd: ${fakeMyModel.booleanStd},
                      }) { 
                        myModel 
                        { id, 
                          uuidStd,
                          varchar255NotNull,
                          integerUniqueNotNull,
                          dateStdNow,
                          dateTime,
                          booleanStd,
                        },
                      }
                  }`,
      })
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/);

    const { statusCode } = response;
    expect(statusCode).toBe(200);

    const { myModel } = response.body.data.createMyModel;

    expect(myModel.varchar255NotNull).toBe(fakeMyModel.varchar255NotNull);
    expect(myModel.integerUniqueNotNull).toBe(fakeMyModel.integerUniqueNotNull);
    expect(myModel.dateStdNow).toBe(fakeMyModel.dateStdNow);
    expect(myModel.dateTime).toBe(fakeMyModel.dateTime);
    expect(myModel.booleanStd).toBe(fakeMyModel.booleanStd);
  });


  test('Get - Response with a myModel', async () => {

    const myModelDict = await buildMyModel({
    });
    const fakeMyModel = await createMyModel(myModelDict);

    const myModelId = toGlobalId('MyModelNode', fakeMyModel.id);

    const response = await request(app)
      .post(ENDPOINT)
      .send({ query: `{ myModel
                        (id:"${ myModelId }")
                        { id
                          uuidStd
                          varchar255NotNull
                          integerUniqueNotNull
                          dateStdNow
                          dateTime
                          booleanStd
                        }
                      }`
           })
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/);

    const { statusCode } = response;
    expect(statusCode).toBe(200);

    const { myModel } = response.body.data;
    
    expect(myModel.uuidStd).toBe(fakeMyModel.uuidStd);
    expect(myModel.varchar255NotNull).toBe(fakeMyModel.varchar255NotNull);
    expect(myModel.integerUniqueNotNull).toBe(fakeMyModel.integerUniqueNotNull);
    expect(myModel.dateStdNow).toBe(fakeMyModel.dateStdNow);
    expect(myModel.dateTime).toBe(fakeMyModel.dateTime.toJSON());
    expect(myModel.booleanStd).toBe(fakeMyModel.booleanStd);
  });
  
  test('Get All - Response with a list of myModels', async () => {

    const myModelDict = await buildMyModel({
    });
    const fakeMyModel = await createMyModel(myModelDict);

    const response = await request(app)
      .post(ENDPOINT)
      .send({ query: `{ allMyModels
                        { id
                          uuidStd
                          varchar255NotNull
                          integerUniqueNotNull
                          dateStdNow
                          dateTime
                          booleanStd
                        }
                      }`
           })
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/);

    const { statusCode } = response;
    expect(statusCode).toBe(200);

    const { allMyModels } = response.body.data;

    const dbAllMyModels = await MyModel.findAll();

    expect(allMyModels.length).toBe(dbAllMyModels.length);
  });

  test('Update - response with an updated myModel', async () => {

    const myModelDict = await buildMyModel({  });
    const fakeMyModel = await createMyModel(myModelDict);


    const anotherFakeMyModel = await buildMyModel({  });

    const response = await request(app)
      .post(ENDPOINT)
      .send({
        query: `mutation {
                    updateMyModel ( input: {
                      id: "${toGlobalId('MyModelNode', fakeMyModel.id)}",
                      varchar255NotNull: "${ anotherFakeMyModel.varchar255NotNull }",
                      integerUniqueNotNull: ${ anotherFakeMyModel.integerUniqueNotNull },
                      dateStdNow: "${ anotherFakeMyModel.dateStdNow }",
                      dateTime: "${ anotherFakeMyModel.dateTime }",
                      booleanStd: ${ anotherFakeMyModel.booleanStd },
                      }) { 
                        myModel
                        { id
                          uuidStd
                          varchar255NotNull
                          integerUniqueNotNull
                          dateStdNow
                          dateTime
                          booleanStd
                        }
                      }
                  }`,
      })
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/);

    const { statusCode } = response;
    expect(statusCode).toBe(200);

    const { myModel } = response.body.data.updateMyModel;

    expect(myModel.varchar255NotNull).toBe(anotherFakeMyModel.varchar255NotNull);
    expect(myModel.integerUniqueNotNull).toBe(anotherFakeMyModel.integerUniqueNotNull);
    expect(myModel.dateStdNow).toBe(anotherFakeMyModel.dateStdNow);
    expect(myModel.dateTime).toBe(anotherFakeMyModel.dateTime);
    expect(myModel.booleanStd).toBe(anotherFakeMyModel.booleanStd);
  });

  test('Delete - response with a deleted myModel', async () => {
    const myModelDict = await buildMyModel({});
    const fakeMyModel = await createMyModel(myModelDict);

    const response = await request(app)
      .post(ENDPOINT)
      .send({
        query: `mutation {
                    deleteMyModel ( input: {
                      id: "${toGlobalId('MyModelNode', fakeMyModel.id)}"
                      }) { 
                        myModel
                        { id
                          
                          uuidStd
                          
                          varchar255NotNull
                          
                          integerUniqueNotNull
                          
                          dateStdNow
                          
                          dateTime
                          
                          booleanStd
                          
                        }
                      }
                  }`,
      })
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/);

    const { statusCode } = response;
    expect(statusCode).toBe(200);

    const { myModel } = response.body.data.deleteMyModel;

    
    expect(myModel.uuidStd).toBeNull();
    
    expect(myModel.varchar255NotNull).toBeNull();
    
    expect(myModel.integerUniqueNotNull).toBeNull();
    
    expect(myModel.dateStdNow).toBeNull();
    
    expect(myModel.dateTime).toBeNull();
    
    expect(myModel.booleanStd).toBeNull();
    
  });
  
  afterAll(async () => {
    await deleteDatabase(sequelize);
    await app.close();
  });
});

