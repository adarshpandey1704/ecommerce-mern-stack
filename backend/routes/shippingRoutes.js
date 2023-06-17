import express from 'express';
import { shippingController } from '../controllers/shippingController.js';

const router = express.Router();

router.post('/address', shippingController);

export default router;