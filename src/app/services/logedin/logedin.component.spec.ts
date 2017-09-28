import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogedinComponent } from './logedin.component';

describe('LogedinComponent', () => {
  let component: LogedinComponent;
  let fixture: ComponentFixture<LogedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
