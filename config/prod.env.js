let HOST = process.argv.splice(2)[0] || '/_ai';
module.exports = {
  NODE_ENV: '"production"',
  HOST: '"'+HOST+'"'
}
