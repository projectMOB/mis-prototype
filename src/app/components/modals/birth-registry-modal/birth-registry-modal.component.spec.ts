import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthRegistryModalComponent } from './birth-registry-modal.component';

describe('BirthRegistryModalComponent', () => {
  let component: BirthRegistryModalComponent;
  let fixture: ComponentFixture<BirthRegistryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthRegistryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthRegistryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
