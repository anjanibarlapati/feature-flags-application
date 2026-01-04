import { setUpAssociations } from "./associations/setupAssociations.ts";
import { sequelize } from "./dbConnection.ts";


export async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log(`Database connection established successfully.`);
        await setUpAssociations(); 
        await sequelize.sync({alter:true}); 

    } catch (error) {
        throw Error(`Unable to connect to the database or sync models: ${error}`, );
    }
}