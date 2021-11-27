const express = require('express')
const router = express.Router()

const productController = require('../controllers/ProductController')

router.get('/create', productController.createProduct)
router.post('/create', productController.createProductPost)
router.post('/remove/:id', productController.removeProduct)
router.post('/edit', productController.editProductPost)
router.get('/edit/:id', productController.editProduct)
router.get('/:id', productController.getProduct)
router.get('/', productController.showProducts)

module.exports = router