const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());

// MySQL 连接池
const pool = mysql.createPool({
  host: 'mysql',
  user: 'appuser',
  password: 'apppassword',
  database: 'myapp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 测试路由
app.get('/', (req, res) => {
  res.json({ 
    message: 'Node.js API is running!',
    timestamp: new Date().toISOString()
  });
});

// 健康检查
app.get('/health', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT 1');
    res.json({ 
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'unhealthy',
      database: 'disconnected',
      error: error.message 
    });
  }
});

// API 路由示例
app.get('/api/users', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM users');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Node.js server running on port ${PORT}`);
});