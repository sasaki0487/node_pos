var db = require('./query')

module.exports = {
    auth: (user, pass, res) => {
        const queryObj = {
            text:
                'SELECT COUNT(*) as num FROM account WHERE username = $1 AND password = $2',
            values: [user, pass],
        }
        db.query(queryObj, res)
    },
}
