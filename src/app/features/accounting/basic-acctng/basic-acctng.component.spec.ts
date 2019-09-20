import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAcctngComponent } from './basic-acctng.component';

describe('BasicAcctngComponent', () => {
  let component: BasicAcctngComponent;
  let fixture: ComponentFixture<BasicAcctngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAcctngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAcctngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
