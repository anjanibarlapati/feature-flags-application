import { Router } from 'express';
import { FeatureFlagController } from '../controllers/featureFlagController.ts';

const router = Router();

router.post('/feature-flags', FeatureFlagController.createFeatureFlag);

router.get('/feature-flags', FeatureFlagController.getAllFeatureFlags);


export default router;
