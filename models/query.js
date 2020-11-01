var pg = require('pg')
var client = new Client({
    database: 'node_pos',
})
client.connect()

module.exports = {
    query: (text, params, callback) => {},
}
