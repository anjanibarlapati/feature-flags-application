import { Router } from 'express';
import { FeatureFlagController } from '../controllers/featureFlagController.ts';

const router = Router();

router.post('/feature-flags', FeatureFlagController.createFeatureFlag);

export default router;
