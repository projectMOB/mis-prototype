import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-certificate-modal',
  templateUrl: './certificate-modal.component.html',
  styleUrls: ['./certificate-modal.component.scss']
})
export class CertificateModalComponent implements OnInit {


  certTypes = [
    {
      id: 1,
      text: 'Certificate of Live Birth',
      isChecked: false
    },
    {
      id: 2,
      text: 'Certificate of Marriage',
      isChecked: false
    },
    {
      id: 3,
      text: 'Certificate of Death',
      isChecked: false
    },
    {
      id: 4,
      text: 'Community Tax Certificate',
      isChecked: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
