<?php
// 显示 PHP 信息
phpinfo();

// 测试 MySQL 连接
try {
    $pdo = new PDO(
        'mysql:host=mysql;dbname=myapp', 
        'appuser', 
        'apppassword'
    );
    echo "<h2>MySQL 连接成功!</h2>";
    
    // 查询示例数据
    $stmt = $pdo->query("SELECT * FROM users");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo "<h3>用户列表:</h3>";
    foreach ($users as $user) {
        echo "ID: {$user['id']}, 姓名: {$user['name']}, 邮箱: {$user['email']}<br>";
    }
    
} catch (PDOException $e) {
    echo "<h2>MySQL 连接失败: " . $e->getMessage() . "</h2>";
}

// 测试 Node.js API
$nodeResponse = @file_get_contents('http://nodejs:3000/');
if ($nodeResponse) {
    $nodeData = json_decode($nodeResponse, true);
    echo "<h2>Node.js API 状态: " . ($nodeData['message'] ?? '未知') . "</h2>";
} else {
    echo "<h2>Node.js API 连接失败</h2>";
}
?>