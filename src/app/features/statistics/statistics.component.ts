import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  id: string;
  barangay: string;
  male: string;
  female: string;
  pwd: string;
  residenceSize: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 'IDB-05112', barangay: 'Barangay A', male: '100', female: '99', pwd: '10', residenceSize: '199'},
  {id: 'IDB-05113', barangay: 'Barangay B', male: '99', female: '90', pwd: '5', residenceSize: '189'},
  {id: 'IDB-05114', barangay: 'Barangay C', male: '70', female: '30', pwd: '0', residenceSize: '100'},
  {id: 'IDB-05115', barangay: 'Barangay D', male: '55', female: '145', pwd: '21', residenceSize: '200'},
];

@Component({
  selector: 'mis-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'barangay', 'male', 'female', 'pwd', 'residenceSize'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
