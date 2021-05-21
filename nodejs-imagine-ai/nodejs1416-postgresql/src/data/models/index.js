import Sequelize from "sequelize";
import config from "config";

import { myModelModel } from "./myModel.model";

const pg = require("pg");

// https://github.com/sequelize/sequelize/issues/4550
pg.defaults.parseInt8 = true;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
  }
);

myModelModel(sequelize);

const { MyModel } = sequelize.models;

if (process.env.NODE_ENV !== "test" && !process.env.USE_MIGRATIONS) {
  sequelize.sync({ alter: true });
}

export { sequelize, MyModel };
