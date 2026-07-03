const { Pool } = require('pg');

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
  } catch (err) {
    console.error('❌ Connection error:', err.stack);
  }
}
checkConnection();
