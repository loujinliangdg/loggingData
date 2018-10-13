var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

let HOST = process.argv.splice(2)[0] || '/_ai';
console.log(HOST)
// module.exports = {
//   NODE_ENV: '"production"',
//   HOST: '"'+HOST+'"'
// }


module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HOST: '"'+HOST+'"'
})
