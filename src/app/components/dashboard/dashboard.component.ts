import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    tooltips: { enabled: true },
    hover: { mode: null },
    scales: {
      x: {
        grid: {
          drawBorder: false,
        }
      },
      y: {
        grid: {
          drawBorder: false,
        },
      }
    }
  };

  public mbarChartLabels: string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  public barChartLegend: boolean = true;

  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(0, 179, 255,0.2)',
      borderColor: 'rgba(0, 179, 255,1)',
      pointBackgroundColor: 'rgba(0, 179, 255,1)',
      pointBorderColor: '#ffffff',
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: 'rgba(0, 179, 255)'
    },
    {
      backgroundColor: 'rgba(165, 22, 222,0.3)',
      borderColor: 'rgba(165, 22, 222,1)',
      pointBackgroundColor: 'rgba(165, 22, 222,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(165, 22, 222,1)'
    }
  ];
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255, 164, 67,0.1)',
      borderColor: 'rgba(255, 164, 67)',
      pointBackgroundColor: 'rgba(255,164,67,1)',
      pointBorderColor: '#ffffff',
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: 'rgba(255,148,25)'
    },
    {
      backgroundColor: 'rgba(41, 169, 27,0.1)',
      borderColor: 'rgba(41, 169, 27,1)',
      pointBackgroundColor: 'rgba(15, 147, 1)',
      pointBorderColor: '#ffffff',
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: 'rgba(41, 169, 27,1)'
    }
  ];
  public barChartData: any[] = [
    { data: [55, 30, 75, 22, 36, 52, 58], label: 'Company A' },
    { data: [58, 55, 60, 79, 66, 57, 90], label: 'Company B' }
  ];

  // events
  // public chartClicked(e: any): void {
  //   console.log(e);
  // }

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }

  public randomize(): void {
    let data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      Math.round(Math.random() * 100)];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
