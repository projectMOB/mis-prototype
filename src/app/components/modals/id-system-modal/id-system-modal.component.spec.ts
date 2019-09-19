import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdSystemModalComponent } from './id-system-modal.component';

describe('IdSystemModalComponent', () => {
  let component: IdSystemModalComponent;
  let fixture: ComponentFixture<IdSystemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdSystemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdSystemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
