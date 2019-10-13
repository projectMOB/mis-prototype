import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageRegistryModalComponent } from './marriage-registry-modal.component';

describe('MarriageRegistryModalComponent', () => {
  let component: MarriageRegistryModalComponent;
  let fixture: ComponentFixture<MarriageRegistryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageRegistryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageRegistryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
