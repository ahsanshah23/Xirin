import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room1humidity',
  templateUrl: './room1humidity.component.html',
  styleUrls: ['./room1humidity.component.css']
})
export class Room1humidityComponent implements OnInit {
  public linechartOptions = {
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

  public linechartLabels = ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];


  public linechartData = [
    {data: [20, 20, 21, 23, 25, 23, 21, 20], label: 'Humidity Room 1'},


  ];
  public linechartType = 'line';


  constructor() { }

  ngOnInit() {
  }

}
