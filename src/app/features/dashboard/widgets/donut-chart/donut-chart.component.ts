import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  dataSource = {
    "chart": {
      "caption": "Total Count of Minors per Barangay",
      "subcaption": "K= One Thousand",
      "enablesmartlabels": "1",
      "showlabels": "1",
      "numbersuffix": "K",
      "usedataplotcolorforlabels": "1",
      "plottooltext": "$label, <b>$value</b> K",
      "theme": "fusion"
    },
    "data": [{
      "label": "Anilao",
      "value": "50"
    }, {
      "label": "Labac",
      "value": "20"
    }, {
      "label": "Pangao",
      "value": "25"
    }, {
      "label": "Plaridel",
      "value": "40"
    }, {
      "label": "Pusil",
      "value": "10"
    }, {
      "label": "Sampaguita",
      "value": "5"
    }, {
      "label": "Santo Niño",
      "value": "60"
    }, {
      "label": "Talisay",
      "value": "30"
    }]
  };
  constructor() { }

  ngOnInit() {
  }

}
