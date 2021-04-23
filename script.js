let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


ctx.fillStyle = 'white';
ctx.beginPath(25, 50);
ctx.bezierCurveTo(75, 80, 90, 5, 120, 100);
ctx.fill();

ctx.fillStyle = 'grey';
ctx.beginPath(25, 50);
ctx.bezierCurveTo(25, 100, 80, 35, 160, 100);
ctx.fill();


ctx.fillStyle = 'grey';
ctx.beginPath(25, 50);
ctx.bezierCurveTo(160, 100, 100, 160, 25, 100);
ctx.fill();
