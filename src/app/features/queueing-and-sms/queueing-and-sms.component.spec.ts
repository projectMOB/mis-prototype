import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueingAndSmsComponent } from './queueing-and-sms.component';

describe('QueueingAndSmsComponent', () => {
  let component: QueueingAndSmsComponent;
  let fixture: ComponentFixture<QueueingAndSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueingAndSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueingAndSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
