import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

let sequelize: Sequelize;

if (process.env.SUPABASE_DB_URL) {
  sequelize = new Sequelize(process.env.SUPABASE_DB_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
        require: true,
        rejectUnauthorized: false,
        },
    },
  });
} 
export { sequelize };