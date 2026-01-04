import { FeatureFlag } from '../models/FeatureFlag.ts';
import { FeatureFlagUserOverride } from '../models/FeatureFlagUserOverride.ts';
import { FeatureFlagGroupOverride } from '../models/FeatureFlagGroupOverride.ts';

export async function setUpAssociations() {
  FeatureFlagUserOverride.belongsTo(FeatureFlag, {
    foreignKey: 'featureFlagId',
    as: 'featureFlag',
    onDelete: 'CASCADE',
  });
  FeatureFlag.hasMany(FeatureFlagUserOverride, {
    foreignKey: 'featureFlagId',
    as: 'userOverrides',
    onDelete: 'CASCADE',
  });

  FeatureFlagGroupOverride.belongsTo(FeatureFlag, {
    foreignKey: 'featureFlagId',
    as: 'featureFlag',
    onDelete: 'CASCADE',
  });
  FeatureFlag.hasMany(FeatureFlagGroupOverride, {
    foreignKey: 'featureFlagId',
    as: 'groupOverrides',
    onDelete: 'CASCADE',
  });
}