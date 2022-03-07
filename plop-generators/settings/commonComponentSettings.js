const componentNameQuestion = {
  type: "input",
  name: "name",
  message: "Type the component name: ",
};

const componentCategoryQuestion = {
  type: "list",
  name: "category",
  message: "Type the component atomic category: ",
  choices: ['atoms', 'molecules', 'organisms']
};

const addComponentMainFileAction = {
  type: "add",
  path: "src/common/components/{{lowerCase category}}/{{lowerCase name}}/index.tsx",
  templateFile: "plop-templates/simpleComponent.ts.hbs",
  skipIfExists: true
};

const addComponentStyleFileAction = {
  type: "add",
  path: "src/common/components/{{lowerCase category}}/{{lowerCase name}}/styles.module.css",
  templateFile: "plop-templates/simpleComponent.css.hbs",
  skipIfExists: true
};

const addComponentTestFileAction = {
  type: "add",
  path: "src/common/components/{{lowerCase category}}/{{lowerCase name}}/index.test.ts",
  templateFile: "plop-templates/simpleComponent.test.ts.hbs",
  skipIfExists: true
}

module.exports = {
  componentNameQuestion,
  componentCategoryQuestion,
  addComponentMainFileAction,
  addComponentStyleFileAction,
  addComponentTestFileAction
}
