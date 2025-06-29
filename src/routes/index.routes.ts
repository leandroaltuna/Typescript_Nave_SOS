import { Router } from 'express';
import { getStatus } from '../controllers/status.controller';
import { getRepairBay } from '../controllers/repair.controller';
import { postTeapot } from '../controllers/teapot.controller';
import { getPhaseChangeDiagram } from '../controllers/changediagram.controller';


const router = Router();

router.get( '/status', getStatus );
router.get( '/repair-bay', getRepairBay );
router.post( '/teapot', postTeapot );

router.get( '/phase-change-diagram', getPhaseChangeDiagram );

export default router;