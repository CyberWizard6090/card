import pool from 'config/dbConfig';

export interface Card {
    id?: number;
    title: string;
    text: string;
}

export async function createCard(title: string, text: string): Promise<Card> {
    const query = 'INSERT INTO cards (title, text) VALUES ($1, $2) RETURNING *';
    const values = [title, text];
    const result = await pool.query(query, values);
    return result.rows[0];
}

export async function deleteCardById(id: number): Promise<Card | null> {
    const query = 'DELETE FROM cards WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows.length > 0 ? result.rows[0] : null;
}

export async function getAllCards(): Promise<Card[]> {
    const query = 'SELECT * FROM cards';
    const result = await pool.query(query);
    return result.rows;
}
