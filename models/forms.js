

module.exports = (sequelize, DataTypes) => {
  const forms = sequelize.define('forms', {
    title: DataTypes.STRING,
  }, {});
  forms.associate = function (models) {
    // associations can be defined here
    forms.hasMany(models.questions);
  };

  forms.createNewForm = formTitle => forms.create({
    title: formTitle,
  });

  forms.findAllForms = () => forms.findAll();
  return forms;
};
