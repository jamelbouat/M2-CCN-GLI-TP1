let editingMode = {rect: 0, line: 1};

let pencilWidgets = {
	currColour : document.getElementById('colour'),
	currLineWidth : document.getElementById('spinnerWidth')
}

class Pencil {
	constructor(ctx, drawing, canvas) {
		this.ctx = ctx;
		this.drawing = drawing;
		this.canvas = canvas;
		this.currEditingMode = editingMode.line;
		this.currColour = pencilWidgets.currColour.value;
		this.currLineWidth = pencilWidgets.currLineWidth.value;
		this.newForm = {};

		new DnD(canvas, this);
		this.currentShape = {};
		this.listenToChanges();
	}

	onInteractionStart = (dnd) => {
		this.currentShape["initX"] = dnd.initialPosition.x;
		this.currentShape["initY"] = dnd.initialPosition.y;
		this.currentShape["color"] = this.currColour;
		this.currentShape["lineWidth"] = this.currLineWidth;
	}

	onInteractionUpdate = (dnd) => {
		this.currentShape["finalX"]  = dnd.currentPosition.x;
		this.currentShape["finalY"] = dnd.currentPosition.y;
		if (this.currEditingMode === editingMode.line) {
			this.newForm = new Line(this.currentShape);
		}
		if (this.currEditingMode === editingMode.rect) {
			this.newForm = new Rectangle(this.currentShape);
		}
		this.drawing.addForm(this.newForm );
		this.drawing.paint(this.ctx, this.canvas);
		this.drawing.deleteLastElement();
	}

	onInteractionEnd = (dnd) => {
		this.currentShape["finalX"] = dnd.finalPosition.x;
		this.currentShape["finalY"] = dnd.finalPosition.y;

		this.drawing.addForm(this.newForm );
		this.drawing.paint(this.ctx, this.canvas);
		this.drawing.updateShapeList(this.newForm , this.currentShape, this.currEditingMode);
		this.currentShape = {};
	}
}

Pencil.prototype.listenToChanges = function () {
	let butRect = document.getElementById('butRect');
	let butLine = document.getElementById('butLine');
	butRect.addEventListener('click', () => {
		this.currEditingMode = editingMode.rect;
	})
	butLine.addEventListener('click', () => {
		this.currEditingMode = editingMode.line;
	})
	pencilWidgets.currColour.onchange = () => this.currColour = pencilWidgets.currColour.value;
	pencilWidgets.currLineWidth.onchange = () => this.currLineWidth = pencilWidgets.currLineWidth.value;
}