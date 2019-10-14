import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { MarriageRegistryModalComponent } from 'src/app/components/modals/marriage-registry-modal/marriage-registry-modal.component';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';

export interface PeriodicElement {
  id: string;
  husbandName: string;
  wifeName: string;
  // pob: string;
  dom: string;
  // amountPrice: string;
  processTime: string;
  issuedDate: string;
  releasedDate: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 'REFN-02111', husbandName: 'Kevin Gonzales', wifeName: 'Katlyn Gonzales', dom: '8/24/2019', processTime: 'LOCAL COPY', issuedDate: '8/25/2019', releasedDate: '8/26/2019', actions: ''},
  { id: 'REFN-02112', husbandName: 'Juan Dela Cruz', wifeName: 'Maria Dela Cruz', dom: '7/16/2016', processTime: 'LOCAL COPY', issuedDate: '7/28/2016', releasedDate: '7/29/2016', actions: ''},
  { id: 'REFN-02113', husbandName: 'Vito Dela Cuesta', wifeName: 'Camila Dela Cuesta', dom: '8/8/2018', processTime: 'SECPA', issuedDate: '8/12/2018', releasedDate: '8/17/2018', actions: ''},
  { id: 'REFN-02114', husbandName: 'Ricardo Dalisay', wifeName: 'Alyana Dalisay', dom: '2/14/2019', processTime: 'LOCAL COPY', issuedDate: '2/16/2018', releasedDate: '2/17/2019', actions: ''},
  { id: 'REFN-02115', husbandName: 'Thomas Lopez', wifeName: 'Jennifer Lopez', dom: '6/8/2017', processTime: 'SECPA', issuedDate: '6/10/2017', releasedDate: '6/15/2017', actions: ''},
  ];

@Component({
  selector: 'mis-marriage',
  templateUrl: './marriage.component.html',
  styleUrls: ['./marriage.component.scss']
})
export class MarriageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'husbandName', 'wifeName', 'dom', 'processTime', 'issuedDate', 'releasedDate', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addModal() {
    this.dialog.open(MarriageRegistryModalComponent, {
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
    this.dialog.open(MarriageRegistryModalComponent, {
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
