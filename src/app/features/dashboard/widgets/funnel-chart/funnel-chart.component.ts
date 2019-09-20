import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-funnel-chart',
  templateUrl: './funnel-chart.component.html',
  styleUrls: ['./funnel-chart.component.scss']
})
export class FunnelChartComponent implements OnInit {

  dataFormat: string = 'json';
  dataSource = {
    chart: {
      caption: "Visits Conversion Funnel - 2017",
      subcaption: "Twilio",
      theme: "fusion",
      is2d: "0",
      ishollow: "0",
      usesameslantangle: "0",
      plottooltext: "$label: <b>$percentValue ($dataValue)</b>",
      showvalues: "1",
      decimals: "1"
    },
    data: [
      {
        label: "Website Visits",
        value: "385634"
      },
      {
        label: "Sign-ups",
        value: "145631"
      },
      {
        label: "Interested to buy",
        value: "84564"
      },
      {
        label: "Contract finalized",
        value: "50654"
      },
      {
        label: "Purchased",
        value: "25342"
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
