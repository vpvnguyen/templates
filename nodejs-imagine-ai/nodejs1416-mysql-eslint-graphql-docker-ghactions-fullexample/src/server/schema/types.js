import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLScalarType } from 'graphql';
import { globalIdField, connectionDefinitions, connectionArgs, connectionFromArray } from 'graphql-relay';
import { GraphQLDateTime, GraphQLLocalDate } from 'graphql-scalars';
import {  } from 'server/services';

export const MyModelType = new GraphQLObjectType({
  name: 'MyModelNode',
  fields: () => ({
    id: globalIdField('MyModelNode', (obj) => obj.id),
    uuidStd: { type: GraphQLString },
    varchar255NotNull: { type: GraphQLString },
    integerUniqueNotNull: { type: GraphQLInt },
    dateStdNow: { type: GraphQLLocalDate },
    dateTime: { type: GraphQLDateTime },
    booleanStd: { type: GraphQLBoolean },
  }),
});


