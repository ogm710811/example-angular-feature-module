import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponentComponent } from './date-component.component';

describe('DateComponentComponent', () => {
  let component: DateComponentComponent;
  let fixture: ComponentFixture<DateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
