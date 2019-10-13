import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealPropertyTaxCollectionModalComponent } from './real-property-tax-collection-modal.component';

describe('RealPropertyTaxCollectionModalComponent', () => {
  let component: RealPropertyTaxCollectionModalComponent;
  let fixture: ComponentFixture<RealPropertyTaxCollectionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealPropertyTaxCollectionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealPropertyTaxCollectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
