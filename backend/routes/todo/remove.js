import express from 'express';
import {removeTodo} from '../../controllers/remove.js';

const router = express.Router();
router.delete('/:id', removeTodo);

export default router;