import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards = [  
    { title: 'Permits', cols: 1, rows: 1, color: 'pink', img: '../../../assets/permits.png', content:"10 for APPROVAL", link:"permits" },  
    { title: 'Clearances', cols: 1, rows: 1, color: 'orange', img: '../../../assets/clearances.png', content:"20 for CLEARING" , link:"clearances"},  
    { title: 'Certificates', cols: 1, rows: 1, color: '#ff6666', img: '../../../assets/certs.png', content:"25 to ISSUE",link:"certificates"  },  
    { title: 'IDs', cols: 1, rows: 1, color: '#dd99ff', img: '../../../assets/id-4.png', content:"30 to ISSUE",link:"issues"  } ,
    { title: 'Statistics', cols: 1, rows: 1, color: '#9FE87B ', img: '../../../assets/analytics-graph.png', content:"200 BARANGAYS",link:"statistics"  }   
  ];  
  
  constructor() { }

  ngOnInit() {
  }

}
