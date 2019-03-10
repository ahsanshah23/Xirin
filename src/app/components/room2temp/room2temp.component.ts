import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room2temp',
  templateUrl: './room2temp.component.html',
  styleUrls: ['./room2temp.component.css']
})
export class Room2tempComponent implements OnInit {
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

    {data: [24, 23, 23, 23, 26, 27, 25, 23], label: 'Temprature Room 2'},


  ];

  constructor() { }

  ngOnInit() {
  }

}
