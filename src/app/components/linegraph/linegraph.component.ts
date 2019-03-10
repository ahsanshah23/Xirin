import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linegraph',
  templateUrl: './linegraph.component.html',
  styleUrls: ['./linegraph.component.css']
})
export class LinegraphComponent implements OnInit {
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
    {data: [20, 20, 21, 23, 25, 23, 21, 20], label: 'Humidity Room 1'},
    {data: [24, 23, 23, 23, 26, 27, 25, 23], label: 'Humidity Room 2'},
    {data: [20, 20, 22, 20, 18, 23, 23, 23], label: 'Humidity Room 3'},


  ];
  public linechartType = 'line';

  constructor() { }

  ngOnInit() {
    
  }

}
