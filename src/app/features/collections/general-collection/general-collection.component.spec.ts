import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCollectionComponent } from './general-collection.component';

describe('GeneralCollectionComponent', () => {
  let component: GeneralCollectionComponent;
  let fixture: ComponentFixture<GeneralCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
