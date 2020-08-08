const Product = require('../models/product.model')

exports.search = (req, res) => {
    var id = req.body.id
    if (id) {
        Product.find({ id: id }, (err, data) => {
            if (err) {
                return res.status(500).send({ res: err })
            } else if (data.length) {
                return res.status(200).send({ stat: '200', res: data })
            } else {
                return res
                    .status(200)
                    .send({ stat: '500', res: 'Id not found' })
            }
        })
    } else {
        return res.status(200).send({ stat: '500', res: 'Please Enter Id' })
    }
}

exports.searchAll = (req, res) => {
    Product.find({})
        .sort('id')
        .exec((err, data) => {
            if (err) {
                return res.status(500).send({ res: err })
            } else {
                return res.status(200).send({ res: data })
            }
        })
}

exports.register = (req, res) => {
    var id = req.body.id
    var name = req.body.name
    var stock = req.body.stock
    var inPrice = req.body.inPrice
    var outPrice = req.body.outPrice
    var company = req.body.company
    Product.create(
        {
            id: id,
            name: name,
            stock: stock,
            inPrice: inPrice,
            outPrice: outPrice,
            company: company,
        },
        (err, doc) => {
            if (err) {
                console.log(err)
                return res.status(500).send({ res: err })
            } else {
                return res.status(200).send({ res: 'Registered.' })
            }
        }
    )
}

exports.update = (req, res) => {
    req = req.body.data
    var id = req.id
    var name = req.name
    var stock = req.stock
    var inPrice = req.inPrice
    var outPrice = req.outPrice
    var company = req.company
    if (id) {
        Product.findOneAndUpdate(
            { id: id },
            {
                id: id,
                name: name,
                stock: stock,
                inPrice: inPrice,
                outPrice: outPrice,
                company: company,
            },
            { upsert: true },
            (err, doc) => {
                if (err) {
                    console.log(err)
                    return res.send(500, { error: err })
                } else {
                    return res
                        .status(200)
                        .send({ stat: '200', res: 'Updated.' })
                }
            }
        )
    }
}

exports.delete = (req, res) => {
    var id = req.body.id
    if (id) {
        Product.findOneAndDelete({ id: id }, (err, doc) => {
            if (err) {
                return res.send(500, { error: err })
            } else {
                return res.status(200).send({ stat: '200', res: 'Deleted.' })
            }
        })
    }
}

exports.getRegisterId = (req, res) => {
    Product.find({}, { id: 1, _id: 0 })
        .sort({ id: 1 })
        .exec((err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).send({ error: err })
            } else {
                for (idx = 1; idx <= data.length; ++idx) {
                    if (data[idx - 1].id != idx) {
                        break
                    }
                }
                return res.status(200).send({ ID: idx })
            }
        })
}
