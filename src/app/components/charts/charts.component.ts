import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  public canvas: any;
  public ctx: any;

  constructor() { }

  width = document.documentElement.clientWidth;
  height = document.documentElement.clientHeight

  ngOnInit(): void {
  }


}
