export class Point {
  constructor(
    private context: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public color: string = '#000',
    public radius: number = 1,
  ) {
  }

  draw() {
    const y = (this.context.canvas.height / 2) + Math.log(Math.abs( this.y )) * 10;
    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.arc(this.x, y, this.radius, 0, 2 * Math.PI);
    this.context.stroke();
  }
}
