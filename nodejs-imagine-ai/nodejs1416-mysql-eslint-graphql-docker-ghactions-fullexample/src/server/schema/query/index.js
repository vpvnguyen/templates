import { GraphQLObjectType } from 'graphql';
import { MyModelQuery } from './myModel.query';

export const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    myModel: MyModelQuery.get(),
    allMyModels: MyModelQuery.getAll(),
  }),
});
