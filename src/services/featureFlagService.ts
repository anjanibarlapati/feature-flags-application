import { FeatureFlag } from '../models/FeatureFlag.ts';
import { FeatureFlagUserOverride } from '../models/FeatureFlagUserOverride.ts';
import { FeatureFlagGroupOverride } from '../models/FeatureFlagGroupOverride.ts';

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
    return FeatureFlag.findAll({ attributes: ['name', 'enabled'] });
  }

  static async getFeatureFlagByName(name: string) {
    return FeatureFlag.findOne({ where: { name }, attributes: ['name', 'enabled'] });
  }

  static async evaluateFeatureFlag(name: string, userId?: string, groupId?: string) {
    
    const feature = await FeatureFlag.findOne({ where: { name } });
    if (!feature) throw new Error('Feature flag not found.');

    if (userId) {
      const userOverride = await FeatureFlagUserOverride.findOne({ where: { featureFlagId: feature.id, userId } });
      if (userOverride) return { name: feature.name, enabled: userOverride.enabled, context: 'user' };
    }

    if (groupId) {
      const groupOverride = await FeatureFlagGroupOverride.findOne({ where: { featureFlagId: feature.id, groupId } });
      if (groupOverride) return { name: feature.name, enabled: groupOverride.enabled, context: 'group' };
    }

    return { name: feature.name, enabled: feature.enabled, context: 'global' };
  }

  static async updateFeatureFlagState(name: string, enabled: boolean) {
    const flag = await FeatureFlag.findOne({ where: { name } });
    if (!flag) throw new Error('Feature flag not found.');
    flag.enabled = enabled;
    await flag.save();
    return flag;
  }

  static async upsertUserOverride(name: string, userId: string, enabled: boolean) {
    const flag = await FeatureFlag.findOne({ where: { name } });
    if (!flag) throw new Error('Feature flag not found.');
    const [override] = await FeatureFlagUserOverride.upsert({ featureFlagId: flag.id, userId, enabled });
    return override;
  }

  static async upsertGroupOverride(name: string, groupId: string, enabled: boolean) {
    const flag = await FeatureFlag.findOne({ where: { name } });
    if (!flag) throw new Error('Feature flag not found.');
    const [override] = await FeatureFlagGroupOverride.upsert({ featureFlagId: flag.id, groupId, enabled });
    return override;
  }

  static async removeUserOverride(name: string, userId: string) {
    const flag = await FeatureFlag.findOne({ where: { name } });
    if (!flag) throw new Error('Feature flag not found.');
    const count = await FeatureFlagUserOverride.destroy({ where: { featureFlagId: flag.id, userId } });
    return count > 0;
  }

  static async removeGroupOverride(name: string, groupId: string) {
    const flag = await FeatureFlag.findOne({ where: { name } });
    if (!flag) throw new Error('Feature flag not found.');
    const count = await FeatureFlagGroupOverride.destroy({ where: { featureFlagId: flag.id, groupId } });
    return count > 0;
  }
}
