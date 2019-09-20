import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {

  dataSource = {
    chart: {
      caption: "Annual Income",
      yaxisname: "Per Barangay",
      subcaption: "2007-2016",
      legendposition: "Right",
      drawanchors: "0",
      showvalues: "0",
      plottooltext: "<b>$dataValue</b> Annual Income in $label",
      theme: "fusion"
    },
    data: [
      {
        label: "2011",
        value: "1380000"
      },
      {
        label: "2012",
        value: "1450000"
      },
      {
        label: "2013",
        value: "1610000"
      },
      {
        label: "2014",
        value: "1540000"
      },
      {
        label: "2015",
        value: "1480000"
      },
      {
        label: "2016",
        value: "1573000"
      },
      {
        label: "2017",
        value: "2232000"
      },
      {
        label: "2018",
        value: "2476000"
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
