const componentNameQuestion = {
  type: "input",
  name: "name",
  message: "type the component name",
};

const componentSourceQuestion = {
  type: "input",
  name: "source",
  message: "type the component path",
};

const componentAddAction = {
  type: "add",
  path: "src/{{source}}/{{camelCase name}}.tsx",
  templateFile: "plop-templates/component.ts.hbs",
};

export default function (plop) {
  // create your generators here
  plop.setGenerator("component", {
    description: "Simple React Component",
    prompts: [
      // array of inquirer prompts
      componentNameQuestion,
      componentSourceQuestion,
    ],
    actions: [
      // array of actions
      componentAddAction,
    ],
  });
}
