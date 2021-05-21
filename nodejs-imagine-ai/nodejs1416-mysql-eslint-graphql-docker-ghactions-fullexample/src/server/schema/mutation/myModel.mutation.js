import { GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';
import { GraphQLDateTime, GraphQLLocalDate } from 'graphql-scalars';
import { MyModelType } from 'server/schema/types';
import { MyModelService } from 'server/services';


class MyModelMutation {
  static createMyModel() {
    return mutationWithClientMutationId({
      name: 'createMyModel',
      inputFields: {
        varchar255NotNull: { type: new GraphQLNonNull(GraphQLString) },
        integerUniqueNotNull: { type: new GraphQLNonNull(GraphQLInt) },
        dateStdNow: { type: GraphQLLocalDate },
        dateTime: { type: GraphQLDateTime },
        booleanStd: { type: GraphQLBoolean },
        },
      outputFields: {
        myModel: {
          type: MyModelType,
          resolve: (payload) => MyModelService.get(payload.id),
        },
      },
      mutateAndGetPayload: ({
        varchar255NotNull,
        integerUniqueNotNull,
        dateStdNow,
        dateTime,
        booleanStd,
      }) => MyModelService.create(varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd, ),
    });
  }

  static updateMyModel() {
    return mutationWithClientMutationId({
      name: 'updateMyModel',
      inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        varchar255NotNull: { type: GraphQLString },
        integerUniqueNotNull: { type: GraphQLInt },
        dateStdNow: { type: GraphQLLocalDate },
        dateTime: { type: GraphQLDateTime },
        booleanStd: { type: GraphQLBoolean },
        },
      outputFields: {
        myModel: {
          type: MyModelType,
          resolve: (payload) => MyModelService.get(payload.id),
        },
      },
      mutateAndGetPayload: ({
        id,
        varchar255NotNull,
        integerUniqueNotNull,
        dateStdNow,
        dateTime,
        booleanStd,
      }) => MyModelService.update(fromGlobalId(id).id, varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd, ),
    });
  }

  static deleteMyModel() {
    return mutationWithClientMutationId({
      name: 'deleteMyModel',
      inputFields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      outputFields: {
        myModel: {
          type: MyModelType,
          resolve: (payload) => payload.id,
        },
      },
      mutateAndGetPayload: ({ id }) => MyModelService.destroy(fromGlobalId(id).id),
    });
  }
}

export { MyModelMutation };

