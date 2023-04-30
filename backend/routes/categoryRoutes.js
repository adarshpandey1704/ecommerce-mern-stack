import express from 'express';
import {protect} from '../middleware/authMiddleware.js';
import {createCategoryController, getAllCategories} from '../controllers/categoryController.js';

const router = express.Router();

router.post('/create-category', protect, createCategoryController);
router.get('/getAll', protect, getAllCategories);

export default router;