

module.exports = (sequelize, DataTypes) => {
  const answers = sequelize.define('answers', {
    questionId: DataTypes.INTEGER,
    answerText: DataTypes.STRING,
  }, {});
  answers.associate = function () {
    // associations can be defined here
  };
  return answers;
};
