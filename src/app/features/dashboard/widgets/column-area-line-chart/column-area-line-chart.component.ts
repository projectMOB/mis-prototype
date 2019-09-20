import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-column-area-line-chart',
  templateUrl: './column-area-line-chart.component.html',
  styleUrls: ['./column-area-line-chart.component.scss']
})
export class ColumnAreaLineChartComponent implements OnInit {

  dataSource = {
    "chart": {
      "caption": "Top 2 Barangay Annual Expense",
      "subCaption": "For the Municipality",
      "xAxisname": "Barangay",
      "yAxisName": "Amount (In Php)",
      "numberPrefix": "P",
      "exportenabled": "1",
      "theme": "fusion"
    },
    "categories": [{
      "category": [{
        "label": "Pangao"
      }, {
        "label": "Lipa"
      }]
    }],
    "dataset": [{
      "seriesName": "Cash",
      "data": [{
        "value": "1441290"
      }, {
        "value": "855912"
      }]
    }, {
      "seriesName": "Check",
      "renderAs": "line",
      "data": [{
        "value": "1297430"
      }, {
        "value": "776485"
      }]
    }, {
      "seriesName": "Others",
      "renderAs": "area",
      "showAnchors" : "0",
      "data": [{
        "value": "143860"
      }, {
        "value": "79427"
      }]
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
