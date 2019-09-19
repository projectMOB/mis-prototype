import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitModalComponent } from './permit-modal.component';

describe('PermitModalComponent', () => {
  let component: PermitModalComponent;
  let fixture: ComponentFixture<PermitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
