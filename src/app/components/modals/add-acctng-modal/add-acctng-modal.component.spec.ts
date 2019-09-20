import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcctngModalComponent } from './add-acctng-modal.component';

describe('AddAcctngModalComponent', () => {
  let component: AddAcctngModalComponent;
  let fixture: ComponentFixture<AddAcctngModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAcctngModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcctngModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
