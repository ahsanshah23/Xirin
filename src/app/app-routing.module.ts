import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './components/barchart/barchart.component';
import { LinegraphComponent } from './components/linegraph/linegraph.component';
import { HomeComponent } from './components/home/home.component';
import { Room1Component } from './components/room1/room1.component';
import { Room1tempComponent } from './components/room1temp/room1temp.component';
import { Room1humidityComponent } from './components/room1humidity/room1humidity.component';
import { Room2Component } from './components/room2/room2.component';
import { Room2tempComponent } from './components/room2temp/room2temp.component';
import { Room2humidityComponent } from './components/room2humidity/room2humidity.component';



const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'barchart', component: BarchartComponent},
  {path: 'linechart', component:LinegraphComponent},
  {path: 'room1', component:Room1Component},
  {path: 'room1temp', component:Room1tempComponent},
  {path: 'room1humidity', component:Room1humidityComponent},
  {path: 'room2', component:Room2Component},
  {path: 'room2temp', component:Room2tempComponent},
  {path: 'room2humidity', component:Room2humidityComponent},
  {path: '**', component: BarchartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
