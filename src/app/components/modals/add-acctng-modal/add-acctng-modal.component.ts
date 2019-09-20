import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-add-acctng-modal',
  templateUrl: './add-acctng-modal.component.html',
  styleUrls: ['./add-acctng-modal.component.scss']
})
export class AddAcctngModalComponent implements OnInit {

  clearanceTypes = [
    {
      id: 1,
      text: 'Tax Declaration',
      isChecked: false
    },
    {
      id: 2,
      text: 'Fire Safety Certificate',
      isChecked: false
    },
    {
      id: 3,
      text: 'Sanitary Permit',
      isChecked: false
    }
  ];


  businessTypes = [{
    id: 1,
    text: ' Single Proprietorship',
    isChecked: false
  },
  {
    id: 2,
    text: 'Partnership',
    isChecked: false
  },
  {
    id: 3,
    text: 'Corporation',
    isChecked: false
  }];

  constructor() { }

  ngOnInit() {
  }

}
