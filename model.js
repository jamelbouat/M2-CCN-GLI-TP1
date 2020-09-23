
class Drawing {
    constructor() {
        this.forms = [];
    }
    getForms() {
        return this.forms;
    }
    addForm(form) {
        this.forms.push(form);
    }
    deleteLastElement() {
        this.forms.pop();
    }
}

class Form {
    constructor(lineWidth, color) {
        this.lineWidth = lineWidth;
        this.color = color;
    }
}

class Rectangle extends Form {
    constructor(rectArgs) {
        super(rectArgs.lineWidth, rectArgs.color);
        Object.assign(this, rectArgs)
    }

    getInitX() {
        return this.initX;
    }
    getInitY() {
        return this.initY;
    }

    getWidth() {
        return this.finalX - this.initX;
    }
    getHeight() {
        return this.finalY - this.initY;
    }
}

class Line extends Form {
    constructor(lineArgs) {
        super(lineArgs.lineWidth, lineArgs.color);
        Object.assign(this, lineArgs)
    }
    getInitX() {
        return this.initX;
    }
    getInitY() {
        return this.initY;
    }
    getFinalX() {
        return this.finalX;
    }
    getFinalY() {
        return this.finalY;
    }
}

class Circle extends Form {
    constructor(lineArgs) {
        super(lineArgs.lineWidth, lineArgs.color);
        Object.assign(this, lineArgs)
    }
    getInitX() {
        return this.initX;
    }
    getInitY() {
        return this.initY;
    }
    getRadius() {
        return Math.abs(this.finalX - this.initX);
    }
}