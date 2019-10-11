import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealPropertyTaxComponent } from './real-property-tax.component';

describe('RealPropertyTaxComponent', () => {
  let component: RealPropertyTaxComponent;
  let fixture: ComponentFixture<RealPropertyTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealPropertyTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealPropertyTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
