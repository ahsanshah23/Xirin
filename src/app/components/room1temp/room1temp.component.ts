import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room1temp',
  templateUrl: './room1temp.component.html',
  styleUrls: ['./room1temp.component.css']
})
export class Room1tempComponent implements OnInit {

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


  ];


  constructor() { }

  ngOnInit() {
  }

}
