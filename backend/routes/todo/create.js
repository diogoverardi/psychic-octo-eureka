import express from 'express';
import {addTodo} from '../../controllers/create.js';

const router = express.Router();
router.post('/', addTodo);

export default router;