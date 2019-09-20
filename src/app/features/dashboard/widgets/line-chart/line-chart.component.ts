import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  dataSource = {
    chart: {
      caption: "Total No of Residences",
      yaxisname: "% of residences on this platform in Thousands",
      subcaption: "2012-2016",
      showhovereffect: "1",
      numbersuffix: "%",
      drawcrossline: "1",
      plottooltext: "<b>$dataValue</b> of residence were on $seriesName",
      theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "2011"
          },
          {
            label: "2012"
          },
          {
            label: "2013"
          },
          {
            label: "2014"
          },
          {
            label: "2015"
          },
          {
            label: "2016"
          },
          {
            label: "2017"
          },
          {
            label: "2018"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Minor",
        data: [
          {
            value: "62"
          },
          {
            value: "64"
          },
          {
            value: "64"
          },
          {
            value: "66"
          },
          {
            value: "78"
          },
          {
            value: "80"
          },
          {
            value: "85"
          },
          {
            value: "91"
          }
        ]
      },
      {
        seriesname: "Adult",
        data: [
          {
            value: "16"
          },
          {
            value: "28"
          },
          {
            value: "34"
          },
          {
            value: "42"
          },
          {
            value: "54"
          },
          {
            value: "65"
          },
          {
            value: "72"
          },
          {
            value: "85"
          }
        ]
      },
      {
        seriesname: "Senior",
        data: [
          {
            value: "20"
          },
          {
            value: "22"
          },
          {
            value: "27"
          },
          {
            value: "22"
          },
          {
            value: "29"
          },
          {
            value: "31"
          },
          {
            value: "33"
          },
          {
            value: "45"
          }
        ]
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
