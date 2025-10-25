-- 创建用户并授权（MariaDB 语法）
CREATE USER IF NOT EXISTS 'appuser'@'%' IDENTIFIED BY 'apppassword';
GRANT ALL PRIVILEGES ON myapp.* TO 'appuser'@'%';
FLUSH PRIVILEGES;

-- 创建示例表
USE myapp;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT IGNORE INTO users (name, email) VALUES
('测试用户1', 'user1@example.com'),
('测试用户2', 'user2@example.com');