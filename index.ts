import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from server.');
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for secure Neon connections
});

async function checkConnection() {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT NOW();');
    console.log('✅ Connected! Server time:', res.rows[0].now);
    client.release();
  } catch (err: any) {
    console.error('❌ Connection error:', err.stack);
  }
}
checkConnection();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is listening in on ${PORT}`);
});
