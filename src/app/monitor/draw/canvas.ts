export class Canvas {
  public context = this.canvas.getContext('2d');

  private shapes: {
    draw()
  }[] = [];

  constructor(private canvas: HTMLCanvasElement) {
  }

  add(shape: {
    draw()
  }) {
    this.shapes.push(shape);
  }

  draw() {
    this.shapes.forEach(shape => shape.draw());
  }

  clean() {
    this.shapes = [];
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
