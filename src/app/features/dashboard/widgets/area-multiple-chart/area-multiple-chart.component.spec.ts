import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaMultipleChartComponent } from './area-multiple-chart.component';

describe('AreaMultipleChartComponent', () => {
  let component: AreaMultipleChartComponent;
  let fixture: ComponentFixture<AreaMultipleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaMultipleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaMultipleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
