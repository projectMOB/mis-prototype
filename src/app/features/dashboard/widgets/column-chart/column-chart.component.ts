import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {

  dataSource: Object;
    chartConfig: Object;
  constructor() {
    this.chartConfig = {
       width: '700',
       height: '400',
       type: 'column2d',
       dataFormat: 'json',
   };

   this.dataSource = {
       "chart": {
         "caption": "PWD`s Statistics",
         "subCaption": "In Thousands",
         "xAxisName": "Barangay",
         "yAxisName": "Total Count",
         "numberSuffix": "K",
         "theme": "fusion",
       },
       "data": [{
         "label": "Anilao",
         "value": "290"
       }, {
         "label": "Labac",
         "value": "260"
       }, {
         "label": "Pangao",
         "value": "180"
       }, {
         "label": "Plaridel",
         "value": "140"
       }, {
         "label": "Pusil",
         "value": "115"
       }, {
         "label": "Sampaguita",
         "value": "100"
       }, {
         "label": "Santo Niño",
         "value": "30"
       }, {
         "label": "Talisay",
         "value": "30"
       }]
     };

  }

  ngOnInit() {
  }

}
