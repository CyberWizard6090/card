import { Client } from 'pg';
import 'dotenv/config';
import { logError, logInfo } from 'utils/logger';
import pool from 'config/dbConfig';

export async function ensureDatabaseExists() {

    try {
        await pool.connect();
        logInfo('The connection to the database server is established.');

        const dbName = process.env.DB_NAME || 'my_database';

       
        const checkDbQuery = `SELECT 1 FROM pg_database WHERE datname = $1`;
        const result = await pool.query(checkDbQuery, [dbName]);

        if (result.rowCount === 0) {
         
            await pool.query(`CREATE DATABASE ${dbName}`);
            logInfo(`database "${dbName}" successfully created.`);
        } else {
            logInfo(`database "${dbName}"already exists.`);
        }
    } catch (error) {
        logError('Ошибка при проверке или создании базы данных:', error);
    } 
}


