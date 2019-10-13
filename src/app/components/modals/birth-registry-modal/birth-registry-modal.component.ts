import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-birth-registry-modal',
  templateUrl: './birth-registry-modal.component.html',
  styleUrls: ['./birth-registry-modal.component.scss']
})
export class BirthRegistryModalComponent implements OnInit {

  choose: string;
  chooseGender: string[] = ['Male', 'Female'];

  processTime: string[] = ['Local Copy', 'SECPA', 'SECPA with Transmittal'];

  
files: any = [];

  constructor() { }

  ngOnInit() {
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

}
