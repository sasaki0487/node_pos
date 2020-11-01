const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')

router.post('/product/search', productController.search)
router.post('/product/searchAll', productController.searchAll)
router.post('/product/register', productController.register)
router.post('/product/delete', productController.delete)
router.post('/product/getRegisterId', productController.getRegisterId)
router.post('/product/update', productController.update)

module.exports = router
