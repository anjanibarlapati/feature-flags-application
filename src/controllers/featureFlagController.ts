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

  static async getFeatureFlagByName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      if (typeof name !== 'string') {
        return res.status(400).json({ error: 'Feature flag name is required.' });
      }
      const flag = await FeatureFlagService.getFeatureFlagByName(name);
      if (!flag) {
        return res.status(404).json({ error: 'Feature flag not found.' });
      }
      return res.json(flag);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async evaluateFeatureFlag(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const { userId, groupId } = req.query;
      if (typeof name !== 'string') {
        return res.status(400).json({ error: 'Feature flag name is required.' });
      }
      const result = await FeatureFlagService.evaluateFeatureFlag(
        name,
        typeof userId === 'string' ? userId : undefined,
        typeof groupId === 'string' ? groupId : undefined
      );
      return res.json(result);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
