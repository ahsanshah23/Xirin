import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room2humidity',
  templateUrl: './room2humidity.component.html',
  styleUrls: ['./room2humidity.component.css']
})
export class Room2humidityComponent implements OnInit {
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
  public linechartxAxisID:['0'];
  public linechartyAxisID:['0'];

  public linechartData = [
 
    {data: [24, 23, 23, 23, 26, 27, 25, 23], label: 'Humidity Room 2'},
  


  ];
  public linechartType = 'line';

  constructor() { }

  ngOnInit() {
  }

}
