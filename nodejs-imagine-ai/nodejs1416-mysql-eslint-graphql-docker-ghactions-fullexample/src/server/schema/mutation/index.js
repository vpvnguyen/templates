import { GraphQLObjectType } from 'graphql';
import { MyModelMutation } from './myModel.mutation';

export const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createMyModel: MyModelMutation.createMyModel(),
    deleteMyModel: MyModelMutation.deleteMyModel(),
    updateMyModel: MyModelMutation.updateMyModel(),
  }),
});
