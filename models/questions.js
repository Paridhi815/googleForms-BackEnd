

module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    questionText: DataTypes.STRING,
    formId: DataTypes.INTEGER,
    isRequired: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
  }, {});
  questions.associate = function (models) {
    // associations can be defined here
    questions.hasMany(models.answers);
  };
  return questions;
};
