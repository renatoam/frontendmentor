module.exports = function (plop) {
  plop.setGenerator('new project', {
    description: 'Creating new Frontend Mentor project folder',
    prompts: [
      {
        type: 'input',
        name: 'project',
        message: 'Type the project name:'
      },
      {
        type: 'list',
        name: 'level',
        message: 'Type the project level:',
        choices: ['newbie', 'junior', 'intermediate', 'advanced', 'guru']
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/modules/{{level}}/{{project}}/index.tsx',
        templateFile: 'plop-templates/simpleComponent.ts.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: 'src/modules/{{level}}/{{project}}/components/',
        skipIfExists: true
      }
    ]
  })
}