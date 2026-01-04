import { DataTypes, Model } from 'sequelize';
import type { Optional } from 'sequelize';
import { sequelize } from '../dbConnection.ts';

export interface FeatureFlagGroupOverrideAttributes {
  id: number;
  featureFlagId: number;
  groupId: string;
  enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FeatureFlagGroupOverrideCreationAttributes extends Optional<FeatureFlagGroupOverrideAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class FeatureFlagGroupOverride extends Model<FeatureFlagGroupOverrideAttributes, FeatureFlagGroupOverrideCreationAttributes> implements FeatureFlagGroupOverrideAttributes {
  public id!: number;
  public featureFlagId!: number;
  public groupId!: string;
  public enabled!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

FeatureFlagGroupOverride.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    featureFlagId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'FeatureFlagGroupOverride',
    tableName: 'feature_flag_group_overrides',
  }
);
