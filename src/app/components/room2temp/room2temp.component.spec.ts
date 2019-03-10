import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room2tempComponent } from './room2temp.component';

describe('Room2tempComponent', () => {
  let component: Room2tempComponent;
  let fixture: ComponentFixture<Room2tempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room2tempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room2tempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
