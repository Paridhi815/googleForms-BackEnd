

module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    questionText: DataTypes.STRING,
    formId: DataTypes.INTEGER,
    isRequired: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
  }, {});
  questions.associate = (models) => {
    // associations can be defined here
    questions.hasMany(models.answers);
  };
  questions.insertAllQuestions = (questionsWithFormIdArray) => {
    const modelPromise = questions.bulkCreate(questionsWithFormIdArray);
    return modelPromise;
  };

  return questions;
};
