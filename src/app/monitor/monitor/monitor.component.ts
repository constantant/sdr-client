import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  data1$ = this.socket.fromEvent('r1c1').pipe(
    map((data: number[]) => data.filter((_, i) => !(i % 2)))
  );
  data2$ = this.socket.fromEvent('r1c2').pipe(
    map((data: number[]) => data.filter((_, i) => !(i % 2)))
  );

  constructor(private readonly socket: Socket) {
    this.socket.connect();
  }

  ngOnInit(): void {
  }

}
