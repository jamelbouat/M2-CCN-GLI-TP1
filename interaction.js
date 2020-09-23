
class DnD {
    constructor(canvas, interactor) {
        this.canvas = canvas;
        this.interactor = interactor;
        this.initialPosition = {x: 0, y: 0};
        this.finalPosition = {x:0, y: 0};
        this.currentPosition = {x: 0, y:0};

        this.canvas.addEventListener("mousedown", this.onMouseDown);
        this.canvas.addEventListener("mousemove", this.onMouseMove);
        this.canvas.addEventListener("mouseup", this.onMouseUp);

    }

    onMouseUp = (event) => {
        let position = getMousePosition(canvas, event);
        this.finalPosition.x = position.x;
        this.finalPosition.y = position.y;
        this.interactor.onInteractionEnd(this);
    }
    onMouseMove = (event) => {
        let position = getMousePosition(canvas, event);
        this.currentPosition.x = position.x;
        this.currentPosition.y = position.y;
        this.interactor.onInteractionUpdate(this);
    }
    onMouseDown = (event) => {
        let position = getMousePosition(canvas, event);
        this.initialPosition.x = position.x;
        this.initialPosition.y = position.y;
        this.interactor.onInteractionStart(this);
    }
}

function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}



