import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-stacked-column-chart',
  templateUrl: './stacked-column-chart.component.html',
  styleUrls: ['./stacked-column-chart.component.scss']
})
export class StackedColumnChartComponent implements OnInit {

  dataSource = {
    chart: {
      caption: "Yearly Daily Collection Rate",
      subcaption: " Top 5 Barangays",
      numbersuffix: " TWh",
      showsum: "1",
      plottooltext:
        "$label produces <b>$dataValue</b> of energy from $seriesName",
      theme: "fusion",
      drawcrossline: "1"
    },
    categories: [
      {
        category: [
          {
            label: "Anilao"
          },
          {
            label: "Labac"
          },
          {
            label: "Pusil"
          },
          {
            label: "Pangao"
          },
          {
            label: "Plaridel"
          },
          {
            label: "Talisay"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Cash",
        data: [
          {
            value: "400"
          },
          {
            value: "830"
          },
          {
            value: "500"
          },
          {
            value: "420"
          },
          {
            value: "790"
          },
          {
            value: "380"
          }
        ]
      },
      {
        seriesname: "Check",
        data: [
          {
            value: "350"
          },
          {
            value: "620"
          },
          {
            value: "410"
          },
          {
            value: "370"
          },
          {
            value: "720"
          },
          {
            value: "310"
          }
        ]
      },
      {
        seriesname: "Others",
        data: [
          {
            value: "210"
          },
          {
            value: "400"
          },
          {
            value: "450"
          },
          {
            value: "180"
          },
          {
            value: "570"
          },
          {
            value: "270"
          }
        ]
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
