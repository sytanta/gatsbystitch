const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: `collections/mens-shirts`,
    component: path.resolve(`./src/templates/collection.js`),
    context: {},
  })
}
