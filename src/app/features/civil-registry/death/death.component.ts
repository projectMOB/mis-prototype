import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DeathRegistryModalComponent } from 'src/app/components/modals/death-registry-modal/death-registry-modal.component';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';

export interface PeriodicElement {
  id: string;
  deceasedName: string;
  dod: string;
  pod: string;
  // pom: string;
  // amountPrice: string;
  processTime: string;
  issuedDate: string;
  releasedDate: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 'REFN-02111', deceasedName: 'Tony Stark', dod: '3/2/2000', pod: 'Anilao, Lipa City', processTime: 'LOCAL COPY', issuedDate: '8/25/2019', releasedDate: '8/26/2019', actions: ''},
  { id: 'REFN-02112', deceasedName: 'Juan Dela Cruz', dod: '8/13/2003', pod: 'Sabang, Lipa City', processTime: 'LOCAL COPY', issuedDate: '7/28/2016', releasedDate: '7/29/2016', actions: ''},
  { id: 'REFN-02113', deceasedName: 'Vito Dela Cuesta', dod: '5/10/1997', pod: 'Antipolo del Sur, Lipa City', processTime: 'SECPA', issuedDate: '8/12/2018', releasedDate: '8/17/2018', actions: ''},
  { id: 'REFN-02114', deceasedName: 'Ricardo Dalisay', dod: '1/23/2011', pod: 'Pangao, Lipa City', processTime: 'LOCAL COPY', issuedDate: '2/16/2018', releasedDate: '2/17/2019', actions: ''},
  { id: 'REFN-02115', deceasedName: 'Thomas Lopez', dod: '4/5/2013', pod: 'Lodlod, Lipa City', processTime: 'SECPA', issuedDate: '6/10/2017', releasedDate: '6/15/2017', actions: ''},
  ];

@Component({
  selector: 'mis-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.scss']
})
export class DeathComponent implements OnInit {

  displayedColumns: string[] = ['id', 'deceasedName', 'dod', 'pod', 'issuedDate', 'releasedDate', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addModal() {
    this.dialog.open(DeathRegistryModalComponent, {
      width: '600px',
      height: '600px'
    });
  }

  // view() {
  //   // this.dialog.open(CertificateModalComponent, {
  //   //   width: '600px'
  //   // });
  // }

  edit() {
    this.dialog.open(DeathRegistryModalComponent, {
      width: '600px',
      height: '600px'
    });
  }

  delete() {
    this.dialog.open(DeleteModalComponent, {
      width: '600px'
    });
  }

}
