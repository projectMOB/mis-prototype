import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mis-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

}
