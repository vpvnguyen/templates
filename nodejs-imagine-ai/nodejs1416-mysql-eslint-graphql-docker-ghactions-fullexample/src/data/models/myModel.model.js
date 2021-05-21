import { DataTypes, Sequelize } from 'sequelize';


const myModelModel = (sequelize) => {
  const MyModel = sequelize.define('MyModel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,  
      autoIncrement: true,
    },
    uuidStd: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    varchar255NotNull: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0,255],
      },
    },
    integerUniqueNotNull: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    dateStdNow: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      validate: {
        isDate: true,
      },
    },
    dateTime: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
    booleanStd: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    freezeTableName: true,
  });
};

export { myModelModel };

