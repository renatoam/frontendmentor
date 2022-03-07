const {
  componentNameQuestion,
  componentCategoryQuestion,
  addComponentMainFileAction,
  addComponentStyleFileAction,
  addComponentTestFileAction,
  addComponentStoriesFileAction
} = require('./settings/commonComponentSettings')

module.exports = function (plop) {
  plop.setGenerator("common component", {
    description: "Simple React component create for common purpose",
    prompts: [
      // array of inquirer prompts
      componentNameQuestion,
      componentCategoryQuestion,
    ],
    actions: [
      // array of actions
      addComponentMainFileAction,
      addComponentStyleFileAction,
      addComponentTestFileAction,
      addComponentStoriesFileAction
    ],
  });
}