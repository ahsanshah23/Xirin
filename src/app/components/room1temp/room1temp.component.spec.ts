import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room1tempComponent } from './room1temp.component';

describe('Room1tempComponent', () => {
  let component: Room1tempComponent;
  let fixture: ComponentFixture<Room1tempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room1tempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room1tempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
