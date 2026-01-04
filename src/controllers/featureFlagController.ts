import type { Request, Response } from 'express';
import { FeatureFlagService } from '../services/featureFlagService.ts';

export class FeatureFlagController {
  static async createFeatureFlag(req: Request, res: Response) {
    try {
      const { name, enabled, description } = req.body;
      if (typeof name !== 'string' || typeof enabled !== 'boolean') {
        return res.status(400).json({ error: 'Name (string) and enabled (boolean) are required.' });
      }
      const featureFlag = await FeatureFlagService.createFeatureFlag({ name, enabled, description });
      return res.status(201).json(featureFlag);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getAllFeatureFlags(_req: Request, res: Response) {
    try {
      const flags = await FeatureFlagService.getAllFeatureFlags();
      return res.json(flags);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }


}
