import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Canvas } from '../draw/canvas';
import { Point } from '../draw/point';

@Component({
  selector: 'app-sdr-chart',
  templateUrl: './sdr-chart.component.html',
  styleUrls: ['./sdr-chart.component.scss']
})
export class SdrChartComponent implements OnInit, OnChanges {

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;


  @Input() data: number[];
  @Input() label: string;

  private xCanvas: Canvas;

  ngOnInit(): void {
    this.updateDelta();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue) {
      this.draw();
    }
  }

  @HostListener('window:resize')
  updateDelta() {
    if (!this.canvas) {
      return;
    }
    const canvas = this.canvas.nativeElement;
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
  }

  draw() {
    const canvas = this.xCanvas || (this.xCanvas = new Canvas(this.canvas.nativeElement));
    canvas.clean();

    for (let i = 0; i < this.data.length; i++) {
      const point = new Point(canvas.context, i, this.data[ i ]);
      canvas.add(point);
    }

    canvas.draw();
  }
}
