import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  dataSource = {
    "chart": {
      "caption": "Total No of People per Orientation",
      "subCaption" : "For the Municipality",
      "showValues":"1",
      "showPercentInTooltip" : "0",
      "numberPrefix" : "$",
      "enableMultiSlicing":"1",
      "theme": "fusion"
    },
    "data": [{
      "label": "Female",
      "value": "300000"
    }, {
      "label": "Male",
      "value": "230000"
    }]
  }
  constructor() { }

  ngOnInit() {
  }

}
