import { Router } from 'express';
import { FeatureFlagController } from '../controllers/featureFlagController.ts';

const router = Router();

router.post('/feature-flags', FeatureFlagController.createFeatureFlag);

router.get('/feature-flags', FeatureFlagController.getAllFeatureFlags);

router.get('/feature-flags/:name', FeatureFlagController.getFeatureFlagByName);

router.get('/feature-flags/:name/evaluate', FeatureFlagController.evaluateFeatureFlag);

router.patch('/feature-flags/:name', FeatureFlagController.updateFeatureFlagState);

router.put('/feature-flags/:name/user-override', FeatureFlagController.upsertUserOverride);

router.delete('/feature-flags/:name/user-override', FeatureFlagController.removeUserOverride);

router.put('/feature-flags/:name/group-override', FeatureFlagController.upsertGroupOverride);

router.delete('/feature-flags/:name/group-override', FeatureFlagController.removeGroupOverride);

export default router;
