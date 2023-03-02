const React = require("react");
const Layout = require("./src/components/layout/Layout.jsx").default;

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
