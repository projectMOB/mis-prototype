import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards = [  
    { title: 'Permits', cols: 1, rows: 1, color: 'pink', img: '../../../assets/permits.jpg', content:"10 Permits for Approval", link:"permits" },  
    { title: 'Clearances', cols: 1, rows: 1, color: 'orange', img: '../../../assets/clearances.png', content:"20 Clearances for Clearing" , link:"clearances"},  
    { title: 'Certificates', cols: 1, rows: 1, color: '#ff6666', img: '../../../assets/certificates.png', content:"25 Certificates to Issue",link:"certificates"  },  
    { title: 'ID`s', cols: 1, rows: 1, color: '#dd99ff', img: '../../../assets/ids.png', content:"30 ID`s to Issue",link:"issues"  } ,
    { title: 'Statistics', cols: 1, rows: 1, color: '#9FE87B ', img: '../../../assets/statistics.png', content:"200 Baranggays",link:"statistics"  }   
  ];  
  
  constructor() { }

  ngOnInit() {
  }

}
