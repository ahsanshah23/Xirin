import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        
      }],
      yAxes: [{

        ticks: {
          beginAtZero: true
        }
       
      }]
    }
  };

  public barChartLabels = ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [20, 20, 21, 23, 25, 23, 21, 20], label: 'Temprature Room 1'},
    {data: [24, 23, 23, 23, 26, 27, 25, 23], label: 'Temprature Room 2'},
    {data: [20, 20, 22, 20, 18, 23, 23, 23], label: 'Temprature Room 3'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
