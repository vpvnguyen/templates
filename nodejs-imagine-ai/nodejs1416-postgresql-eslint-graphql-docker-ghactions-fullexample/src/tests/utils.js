import { sequelize } from 'data/models';

const ENDPOINT = '/graphql';

const startDatabase = async () => {
  await sequelize.sync({ force: true });
};

const deleteDatabase = (db) => db.drop();

export {
  ENDPOINT,
  startDatabase,
  deleteDatabase,
};
