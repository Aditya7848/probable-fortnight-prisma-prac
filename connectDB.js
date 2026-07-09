import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for secure Neon connections
});

async function checkDBConnection() {
  const client = await pool.connect();
  const res = await client.query('SELECT NOW();');
  console.log('✅ Connected! Server time:', res.rows[0].now);
  client.release();
}


export default checkDBConnection;
