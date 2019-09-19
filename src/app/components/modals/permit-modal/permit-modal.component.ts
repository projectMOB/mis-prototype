import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-permit-modal',
  templateUrl: './permit-modal.component.html',
  styleUrls: ['./permit-modal.component.scss']
})
export class PermitModalComponent implements OnInit {

  permitTypes = [
    {
      id: 1,
      text: 'Building Permit',
      isChecked: false
    },
    {
      id: 2,
      text: 'Electrical Permit',
      isChecked: false
    },
    {
      id: 3,
      text: 'Mechanical Permit',
      isChecked: false
    },
    {
      id: 4,
      text: 'Occupancy Permit',
      isChecked: false
    },
    {
      id: 5,
      text: 'Fencing Permit',
      isChecked: false
    }
  ];
  scopeOfWorks = [
    {
      id: 1,
      text: 'New Construction',
      isChecked: false
    },
    {
      id: 2,
      text: 'Erection',
      isChecked: false
    },
    {
      id: 3,
      text: 'Addition',
      isChecked: false
    },
    {
      id: 4,
      text: 'Alteration',
      isChecked: false
    },
    {
      id: 5,
      text: 'Renovation',
      isChecked: false
    },
    {
      id: 6,
      text: 'Conversion',
      isChecked: false
    },
    {
      id: 7,
      text: 'Repair',
      isChecked: false
    },
    {
      id: 8,
      text: 'Moving',
      isChecked: false
    },
    {
      id: 9,
      text: 'Raising',
      isChecked: false
    },
    {
      id: 10,
      text: 'Accessory Buildings/Structure',
      isChecked: false
    },
    {
      id: 11,
      text: 'Others',
      isChecked: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
