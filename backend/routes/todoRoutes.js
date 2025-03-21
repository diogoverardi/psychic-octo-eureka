import express from 'express';

import getAllRoutes from './todo/getAll.js';
import createRoutes from './todo/create.js';
import updateRoutes from './todo/update.js';
import removeRoutes from './todo/remove.js';

const router = express.Router();

router.use('/', getAllRoutes);
router.use('/', createRoutes);
router.use('/', updateRoutes);
router.use('/', removeRoutes);

export default router;