import express from 'express';
import {protect} from '../middleware/authMiddleware.js';
import { gateway } from '../controllers/paymentController.js';

const router = express.Router();

router.get("/braintree/getToken/:userid", protect, gateway);

export default router;