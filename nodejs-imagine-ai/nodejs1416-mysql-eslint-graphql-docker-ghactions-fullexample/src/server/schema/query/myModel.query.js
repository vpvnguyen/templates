import { GraphQLID, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';
import { fromGlobalId } from 'graphql-relay';
import { GraphQLDateTime, GraphQLLocalDate } from 'graphql-scalars';
import { MyModelType } from 'server/schema/types';
import { MyModelService } from 'server/services';


class MyModelQuery {
  static get() {
    return {
      type: MyModelType,
      args: { id: { type: GraphQLID } },
      resolve: (_, args) => {
        const { id } = fromGlobalId(args.id);
        return MyModelService.get(id);
      },
    };
  }

  static getAll() {
    return {
      type: GraphQLList(MyModelType),
      args: {
        uuidStd: { type: GraphQLString },
        varchar255NotNull: { type: GraphQLString },
        integerUniqueNotNull: { type: GraphQLInt },
        dateStdNow: { type: GraphQLLocalDate },
        dateTime: { type: GraphQLDateTime },
        booleanStd: { type: GraphQLBoolean },
      },
      resolve: (_, args) => MyModelService.getAll(args),
    };
  }
}

export { MyModelQuery };

