
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

canvas.tabIndex = -2;
canvas.width = 800;
canvas.height = 600;

let drawing = new Drawing();
new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);


