import { FeatureFlag } from '../models/FeatureFlag.ts';

export class FeatureFlagService {
  static async createFeatureFlag({ name, enabled, description }: { name: string; enabled: boolean; description?: string }) {
    const existing = await FeatureFlag.findOne({ where: { name } });
    if (existing) {
      throw new Error('Feature flag with this name already exists.');
    }
    const createObj: { name: string; enabled: boolean; description?: string } = { name, enabled };
    if (description !== undefined) {
      createObj.description = description;
    }
    return FeatureFlag.create(createObj);
  }

  static async getAllFeatureFlags() {
    return FeatureFlag.findAll();
  }

}
