const accountModel = require('../models/account.model')

exports.auth = function (req, res) {
    let user = req.body.username
    let pass = req.body.password
    if (user && pass) {
        accountModel.auth(user, pass, (queryRes) => {
            console.log(queryRes['rows'])
            if (queryRes == -1) {
                return res.status(401).send({ res: '' })
            } else if (queryRes['rows'][0]['num'] != 1) {
                return res.status(400).send({ res: 'Wrong ID or Password!' })
            } else {
                req.session.loggedin = true
                req.session.username = user
                return res.status(200).send({ res: '' })
            }
        })
    } else {
        return res
            .status(400)
            .send({ res: 'Please enter Username and Password' })
    }
}
