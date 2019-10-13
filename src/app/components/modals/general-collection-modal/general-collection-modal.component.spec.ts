import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCollectionModalComponent } from './general-collection-modal.component';

describe('GeneralCollectionModalComponent', () => {
  let component: GeneralCollectionModalComponent;
  let fixture: ComponentFixture<GeneralCollectionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralCollectionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCollectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
