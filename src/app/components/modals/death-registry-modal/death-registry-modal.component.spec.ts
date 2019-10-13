import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathRegistryModalComponent } from './death-registry-modal.component';

describe('DeathRegistryModalComponent', () => {
  let component: DeathRegistryModalComponent;
  let fixture: ComponentFixture<DeathRegistryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathRegistryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathRegistryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
