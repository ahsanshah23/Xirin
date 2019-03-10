import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { LinegraphComponent } from './components/linegraph/linegraph.component';
import { HomeComponent } from './components/home/home.component';
import { Room1Component } from './components/room1/room1.component';
import { Room1tempComponent } from './components/room1temp/room1temp.component';
import { Room1humidityComponent } from './components/room1humidity/room1humidity.component';
import { Room2Component } from './components/room2/room2.component';
import { Room2tempComponent } from './components/room2temp/room2temp.component';
import { Room2humidityComponent } from './components/room2humidity/room2humidity.component';


@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    LinegraphComponent,
    HomeComponent,
    Room1Component,
    Room1tempComponent,
    Room1humidityComponent,
    Room2Component,
    Room2tempComponent,
    Room2humidityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
