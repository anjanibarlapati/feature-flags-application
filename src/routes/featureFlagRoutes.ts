import { Router } from 'express';
import { FeatureFlagController } from '../controllers/featureFlagController.ts';

const router = Router();

router.post('/feature-flags', FeatureFlagController.createFeatureFlag);

router.get('/feature-flags', FeatureFlagController.getAllFeatureFlags);

router.get('/feature-flags/:name', FeatureFlagController.getFeatureFlagByName);

export default router;
