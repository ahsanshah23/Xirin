import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room1humidityComponent } from './room1humidity.component';

describe('Room1humidityComponent', () => {
  let component: Room1humidityComponent;
  let fixture: ComponentFixture<Room1humidityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room1humidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room1humidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
