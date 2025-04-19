const fs = require('fs');
const path = require('path');

// 读取分块文件
const header = fs.readFileSync(path.join(__dirname, '../header.html'), 'utf8');
const mainContent = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const footer = fs.readFileSync(path.join(__dirname, '../footer.html'), 'utf8');

// 合并内容
const fullHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>高一3班hub</title>
</head>
<body>
  ${header}
  ${mainContent}
  ${footer}
</body>
</html>
`;

// 创建输出目录并写入合并后的文件
const outputDir = path.join(__dirname, '../dist');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
fs.writeFileSync(path.join(outputDir, 'index.html'), fullHTML);

const assetsDir = path.join(__dirname, '../assets');
if (fs.existsSync(assetsDir)) {
  fs.cpSync(assetsDir, path.join(outputDir, 'assets'), { recursive: true });
}

console.log('HTML 文件合并完成！');
