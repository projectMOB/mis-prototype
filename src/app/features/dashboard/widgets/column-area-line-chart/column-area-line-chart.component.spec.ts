import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnAreaLineChartComponent } from './column-area-line-chart.component';

describe('ColumnAreaLineChartComponent', () => {
  let component: ColumnAreaLineChartComponent;
  let fixture: ComponentFixture<ColumnAreaLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnAreaLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnAreaLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
