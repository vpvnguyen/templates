import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { adminbroRouter } from './routes/adminbro.route';

import { sequelize } from 'data/models';
import { schema } from './schema/schema';

const app = express();

app.use('/admin', adminbroRouter);
const graphqlServer = app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

export { graphqlServer, app };
