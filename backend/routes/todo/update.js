import express from 'express';
import {editTodo} from '../../controllers/update.js';

const router = express.Router();
router.put('/:id', editTodo);

export default router;