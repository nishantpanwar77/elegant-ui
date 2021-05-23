import { Directive, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';

@Directive({
  selector: '[D3BarChart]'
})

export class D3BarChartDirective {

  @Input() color: string = 'red';
  constructor(private el: ElementRef) {
    this.createLineChart();
  }
  screenWidth = document.documentElement.clientWidth;
  generateBars(val:number){}
  createLineChart() {
    var data = [];
    var items = ['blue', 'pink', 'red', 'orange']
    var colors = items[Math.floor(Math.random() * items.length)];
    for (var i = 0; i < 45; i++) {
      var num = d3.randomUniform(1, 50)();
      data.push(num);
    }
    d3.select(this.el.nativeElement)
      .selectAll('span')
      .data(data)
      .enter()
      .append('span')
      .classed('bars', true)
      .style('height', function (d) {
        return d * 2 + "px";
      })
      .style('width', "5px")
      .style('display', 'inline-block')
      .style('background-color', colors)
      .style('margin-left', '5px');
  }

}
