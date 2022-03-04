const commonComponent = require('./plop-generators/commonComponent')
const newProject = require('./plop-generators/moduleProject') 

module.exports = function (plop) {
  // create your generators here
  commonComponent(plop)
  newProject(plop)
}
