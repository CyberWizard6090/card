
import app from './app';
import { logInfo } from 'utils/logger';
import { ensureDatabaseExists } from 'models/ensureDatabaseExists';
import { ensureTableExists } from 'models/ensureTableExists';
import pool from 'config/dbConfig';
require('dotenv').config()
const PORT = process.env.PORT || 3000;




async function startApp() {
    await ensureDatabaseExists();
    await ensureTableExists();
    app.listen(PORT, () => {
        logInfo(`[server]: Server is running at http://localhost:${PORT}`);
    });
 

}

startApp();