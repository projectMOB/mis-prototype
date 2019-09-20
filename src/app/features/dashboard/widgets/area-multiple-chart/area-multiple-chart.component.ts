import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-area-multiple-chart',
  templateUrl: './area-multiple-chart.component.html',
  styleUrls: ['./area-multiple-chart.component.scss']
})
export class AreaMultipleChartComponent implements OnInit {

  dataSource = {
    chart: {
      caption: "Employment Status",
      yaxisname: "Quarterly Collection Growth Rate in %",
      subcaption: "Employed and Unemployed",
      drawcrossline: "1",
      numbersuffix: "%",
      plottooltext: "$seriesName's GDP grew $dataValue in $label",
      theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "April 2018"
          },
          {
            label: "July 2018"
          },
          {
            label: "Oct 2018"
          },
          {
            label: "Jan 2018"
          },
          {
            label: "April 2019"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Employed",
        data: [
          {
            value: "9.2"
          },
          {
            value: "7.9"
          },
          {
            value: "7.5"
          },
          {
            value: "7"
          },
          {
            value: "6.1"
          }
        ]
      },
      {
        seriesname: "Unemployed",
        data: [
          {
            value: "6.7"
          },
          {
            value: "6.7"
          },
          {
            value: "6.7"
          },
          {
            value: "6.8"
          },
          {
            value: "6.9"
          }
        ]
      }
    ]
  };
  
  constructor() { }

  ngOnInit() {
  }

}
