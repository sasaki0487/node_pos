const { Client } = require('pg')
const client = new Client({
    database: 'node_pos',
})
client.connect()

module.exports = {
    query: (queryObj, callback) => {
        client
            .query(queryObj)
            .then((res) => {
                callback(res)
            })
            .catch((e) => {
                callback(-1)
            })
    },
}
