import { MyModel } from 'data/models';
import { NotFound } from 'server/utils/errors';


class MyModelRepository {
  static async create(varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd, ) {
    const createdMyModel = await MyModel.create({
      varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd, 
    });

    return createdMyModel;
  }
  static get(id) {
    return MyModel.findByPk(id,{ include: [] });
  }

  static getAll(filters) {
    return MyModel.findAll({
      where: filters,
      include: [],
    });
  }

  static async update(id, varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd, ) {
    return this.partialUpdate({
      id, varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd, 
    });
  }

  static async partialUpdate({ id, varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd,  }) {
    const foundMyModel = await MyModel.findByPk(id);
    if (!foundMyModel) throw new NotFound(`MyModel with primary key ${ id } not found`);
    if(varchar255NotNull !== undefined) foundMyModel.varchar255NotNull = varchar255NotNull;
    if(integerUniqueNotNull !== undefined) foundMyModel.integerUniqueNotNull = integerUniqueNotNull;
    if(dateStdNow !== undefined) foundMyModel.dateStdNow = dateStdNow;
    if(dateTime !== undefined) foundMyModel.dateTime = dateTime;
    if(booleanStd !== undefined) foundMyModel.booleanStd = booleanStd;
    await foundMyModel.save();
    return foundMyModel.reload();
  }



  static async destroy(id) {
    const foundMyModel = await MyModel.findByPk(id);
    if (!foundMyModel) throw new NotFound(`MyModel with primary key ${ id } not found`);
    await foundMyModel.destroy();
    return foundMyModel;
  }

}

export { MyModelRepository };

