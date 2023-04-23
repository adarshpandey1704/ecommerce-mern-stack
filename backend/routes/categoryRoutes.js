import express from 'express';
import {protect} from '../middleware/authMiddleware.js';
import {categoryController} from '../controllers/categoryController.js';

const router = express.Router();

router.post('/create-category', protect, categoryController);

export default router;