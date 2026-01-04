import { DataTypes, Model } from 'sequelize';
import type { Optional } from 'sequelize';
import { sequelize } from '../dbConnection.ts';

export interface FeatureFlagUserOverrideAttributes {
  id: number;
  featureFlagId: number;
  userId: string;
  enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FeatureFlagUserOverrideCreationAttributes extends Optional<FeatureFlagUserOverrideAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class FeatureFlagUserOverride extends Model<FeatureFlagUserOverrideAttributes, FeatureFlagUserOverrideCreationAttributes> implements FeatureFlagUserOverrideAttributes {
  public id!: number;
  public featureFlagId!: number;
  public userId!: string;
  public enabled!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

FeatureFlagUserOverride.init(
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
    userId: {
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
    modelName: 'FeatureFlagUserOverride',
    tableName: 'feature_flag_user_overrides',
  }
);
