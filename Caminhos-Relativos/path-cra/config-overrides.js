const { injectBabelPlugin } = require("react-app-rewired");

const rootImport = [
  "rppt-import",
  {
    rootPathPrefix: "",
    rootPathSuffix: "src",
  },
];

module.exports = (config) => injectBabelPlugin(rootImport, config);
