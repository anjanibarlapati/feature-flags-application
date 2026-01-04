import { Router } from 'express';
import { FeatureFlagController } from '../controllers/featureFlagController.ts';

const router = Router();

router.post('/feature-flags', FeatureFlagController.createFeatureFlag);

router.get('/feature-flags', FeatureFlagController.getAllFeatureFlags);

router.get('/feature-flags/:name', FeatureFlagController.getFeatureFlagByName);

router.get('/feature-flags/:name/evaluate', FeatureFlagController.evaluateFeatureFlag);

// Update global enabled state
router.patch('/feature-flags/:name', FeatureFlagController.updateFeatureFlagState);

export default router;
