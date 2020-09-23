
Rectangle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(), this.getHeight());
    ctx.lineWidth = this.lineWidth;
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.lineWidth = this.lineWidth;
    ctx.stroke();
};

Circle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.getInitX(), this.getInitY(), this.getRadius(), 0, 2 * Math.PI);
    ctx.lineWidth = this.lineWidth;
    ctx.stroke();
}

Drawing.prototype.paint = function(ctx, canvas) {
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0,   canvas.width, canvas.height);
    this.getForms().forEach((draw) => {
        draw.paint(ctx);
    });
};

Drawing.prototype.updateShapeList = function (addedForm, currentShape, editingMode) {
    let list = document.getElementById("shapeList");
    let button = document.createElement("button");
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-primary');
    list.prepend(button);
    let span = document.createElement("span");
    span.setAttribute('class', 'glyphicon glyphicon-remove-sign');
    let textLineOrRect = document.createTextNode(`${
        editingMode === 1 ? ' Line' : editingMode === 0 ? ' Rectangle' : ' Circle'}(${
        currentShape.initX},${currentShape.initY},${
        currentShape.finalX},${currentShape.finalY})`);
    let textCircle = document.createTextNode(` Circle(${
        currentShape.initX},${
        currentShape.initY},${
        editingMode === 2 && 
        addedForm.getRadius().toFixed(2)},0,2PI)`);

    span.appendChild(editingMode === 2 ? textCircle : textLineOrRect);
    button.appendChild(span);
    removeElementOnClick(this, addedForm, span, button);
}

function removeElementOnClick(Drawing, addedForm, span, button) {
    span.addEventListener('click', () => {
        button.remove();
        drawing.getForms().splice(addedForm, 1);
        drawing.paint(ctx, canvas);
    })
}