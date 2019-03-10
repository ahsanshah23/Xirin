import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room2humidityComponent } from './room2humidity.component';

describe('Room2humidityComponent', () => {
  let component: Room2humidityComponent;
  let fixture: ComponentFixture<Room2humidityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room2humidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room2humidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
