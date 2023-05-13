const canvas = document.getElementById("flower-canvas");
const context = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

context.strokeStyle = "#ffc0cb";
context.lineWidth = 2;

context.beginPath();
context.moveTo(200, 100);
context.quadraticCurveTo(150, 50, 200, 0);
context.quadraticCurveTo(250, 50, 200, 100);
context.quadraticCurveTo(200, 250, 50, 300);
context.quadraticCurveTo(200, 350, 200, 200);
context.quadraticCurveTo(200, 350, 350, 300);
context.quadraticCurveTo(200, 250, 200, 100);
context.closePath();
context.stroke();

$(document).ready(function() {
    $(".text").hover(function() {
        $(this).toggleClass('pinklight');
    });
    $("#header").hover(function() {
        $(this).toggleClass('pinklight');
    });
});

// // 获取canvas元素和绘图上下文
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// // 设置画笔颜色和线条宽度
// var color = "#FFAFCC"; // 粉色
// var lineWidth = 5;

// // 定义一些变量和函数
// var x0, y0; // 花朵中心坐标
// var angle; // 花瓣角度
// var radius; // 花瓣半径
// var petals; // 花瓣数量

// // 绘制一朵康乃馨的函数
// function drawCarnation(x, y, angle, radius, petals) {
//   // 保存当前绘图状态
//   ctx.save();
//   // 移动坐标原点到花朵中心
//   ctx.translate(x, y);
//   // 旋转坐标系
//   ctx.rotate(angle);
//   // 设置画笔颜色和线条宽度
//   ctx.strokeStyle = color;
//   ctx.lineWidth = lineWidth;
//   // 开始绘制路径
//   ctx.beginPath();
//   // 循环绘制每个花瓣
//   for (var i = 0; i < petals; i++) {
//     // 计算每个花瓣的起始角度和结束角度（单位为弧度）
//     var startAngle = (i * 2 * Math.PI) / petals;
//     var endAngle = ((i + 1) * 2 * Math.PI) / petals;
//     // 计算每个花瓣的控制点坐标（用于绘制贝塞尔曲线）
//     var cp1x = x + radius * Math.cos(startAngle + Math.PI / petals);
//     var cp1y = y + radius * Math.sin(startAngle + Math.PI / petals);
//     var cp2x = x + radius * Math.cos(endAngle - Math.PI / petals);
//     var cp2y = y + radius * Math.sin(endAngle - Math.PI / petals);
//     // 移动画笔到每个花瓣的起点
//     ctx.moveTo(x + radius * Math.cos(startAngle), y + radius * Math.sin(startAngle));
//     // 绘制贝塞尔曲线到每个花瓣的终点
//     ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x + radius * Math.cos(endAngle), y + radius * Math.sin(endAngle));
//     }
//     // 结束绘制路径
//     ctx.closePath();
//     // 描边路径
//     ctx.stroke();
//     // 恢复绘图状态
//     ctx.restore();
//     }

//     // 定义一个定时器，每隔一秒就自动绘制一朵康乃馨
//     var timer = setInterval(function () {
//     // 随机生成花朵中心坐标，范围在画布内
//     x0 = Math.random() * canvas.width;
//     y0 = Math.random() * canvas.height;
//     // 随机生成花瓣角度，范围在0到2π之间
//     angle = Math.random() * 2 * Math.PI;
//     // 随机生成花瓣半径，范围在10到50之间
//     radius = Math.random() * 40 + 10;
//     // 随机生成花瓣数量，范围在5到10之间
//     petals = Math.floor(Math.random() * 6) + 5;
//     // 绘制一朵康乃馨
//     drawCarnation(x0, y0, angle, radius, petals);
// }, 1000);