const sequelize = require('../db');
const { Model, DataTypes } = require("sequelize");

class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(80),
      allowNull: false,
      validate: {
        notEmpty: { msg: "El titulo no puede estar vacio." },
        len: {
          args: [2, 80],
          msg: "El nombre debe tener como min 2 caracteres y como max 80",
        },
      },
    },
    description: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    sequelize,
    modelName: "Task",
    tableName: "tasks",
    timestamps: true,
  },
);

Task.beforeValidate((task) => {
  if (task.title) task.title = task.title.trim();
});

module.exports = Task;
