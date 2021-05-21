import { MyModelRepository } from 'data/repositories';


class MyModelService {
  static create(varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd, ) {
    return MyModelRepository.create(varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd, );
  }
  static get(id) {
    return MyModelRepository.get(id);
  }

  
  static getAll(args) {
    return MyModelRepository.getAll(args);
  }
  
  static update(id, varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd, ) {
    return MyModelRepository.update(id, varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd, );
  }

  static partialUpdate(id, varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd, ) {
    return MyModelRepository.partialUpdate({ id, varchar255NotNull, integerUniqueNotNull, dateStdNow, dateTime, booleanStd,  });
  }
  
  static destroy(id) {
    return MyModelRepository.destroy(id);
  }
}

export { MyModelService };

