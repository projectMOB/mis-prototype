import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdSystemComponent } from './id-system.component';

describe('IdSystemComponent', () => {
  let component: IdSystemComponent;
  let fixture: ComponentFixture<IdSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
