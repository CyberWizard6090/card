import pool from 'config/dbConfig';
import { logError, logInfo } from 'utils/logger';

export async function ensureTableExists() {
    const tableName = 'cards';
    const checkTableQuery = `
        SELECT 1 
        FROM information_schema.tables 
        WHERE table_name = $1
    `;
    const createTableQuery = `
        CREATE TABLE cards (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            text TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

    try {
        const result = await pool.query(checkTableQuery, [tableName]);

        if (result.rowCount === 0) {
            
            await pool.query(createTableQuery);
            logInfo(`Table "${tableName}" successfully created.`);
        } else {
            logInfo(`Table "${tableName}" already exists.`);
        }
    } catch (error) {
        logError('Error checking or creating a table:', error);
    } 
}


