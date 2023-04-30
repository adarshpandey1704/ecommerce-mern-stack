import express from 'express';
import {protect} from '../middleware/authMiddleware.js';
import {createProductController, getProducts, getProductById, updateProductById} from '../controllers/productController.js';

const router = express.Router();

router.post('/create-product/:userId', protect, createProductController);

router.get('/getAll', getProducts);

router.get('/:productId', getProductById);

router.put('/:productId/:userId', protect, updateProductById);

export default router;