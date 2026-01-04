import { DataTypes, Model } from 'sequelize';
import type { Optional } from 'sequelize';
import { sequelize } from '../dbConnection.ts';

export interface FeatureFlagAttributes {
  id: number;
  name: string;
  description?: string;
  enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FeatureFlagCreationAttributes extends Optional<FeatureFlagAttributes, 'id' | 'description' | 'createdAt' | 'updatedAt'> {}

export class FeatureFlag extends Model<FeatureFlagAttributes, FeatureFlagCreationAttributes> implements FeatureFlagAttributes {
  public id!: number;
  public name!: string;
  public description?: string;
  public enabled!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

FeatureFlag.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'FeatureFlag',
    tableName: 'feature_flags',
  }
);
