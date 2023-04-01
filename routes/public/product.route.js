import express from 'express';

import {
    addProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getSingleProduct,
    addToWishlist,
    getWishlist,
    // checkIfWishlist,
    // deleteFromWishlist,
    addToCart,
    getCart,
    // deleteProductFromCart,
    // searchProduct
} from '../../controllers/product.controller.js'

const router = express.Router()

router.get('/all', getAllProducts)
router.get('/get-single-product/:id', getSingleProduct)
router.get('/wishlist-products/:id', getWishlist)
router.get('/cart-products/:id', getCart)
// router.get('/search', searchProduct)
// router.get('/check-product-in-wishlist/:userId/:productId', checkIfWishlist)

router.post('/add-product-to-wishlist/:userId/:productId', addToWishlist)
router.post('/add-to-cart/:userId/:productId', addToCart)
router.post('/add-product', addProduct)

router.put('/update-product/:id', updateProduct)

// router.delete('/remove-from-wishlist/:userId/:productId', deleteFromWishlist)
// router.delete('/remove-from-cart/:userId/:productId', deleteProductFromCart)
router.delete('/delete-product/:id', deleteProduct)

export default router