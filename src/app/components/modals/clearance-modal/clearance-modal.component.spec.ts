import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearanceModalComponent } from './clearance-modal.component';

describe('ClearanceModalComponent', () => {
  let component: ClearanceModalComponent;
  let fixture: ComponentFixture<ClearanceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearanceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
