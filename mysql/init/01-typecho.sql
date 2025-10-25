-- 创建 Typecho 数据库
CREATE DATABASE IF NOT EXISTS typecho CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 创建用户并授权
CREATE USER IF NOT EXISTS 'typecho'@'%' IDENTIFIED BY 'typecho123';
GRANT ALL PRIVILEGES ON typecho.* TO 'typecho'@'%';
FLUSH PRIVILEGES;

-- 使用 Typecho 数据库
USE typecho;