// eslint-disable-next-line @typescript-eslint/no-var-requires
const percyHealthCheck = require("@percy/cypress/task");

module.exports = (on) => {
  on("task", percyHealthCheck);
};
