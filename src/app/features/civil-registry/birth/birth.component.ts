import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { BirthRegistryModalComponent } from 'src/app/components/modals/birth-registry-modal/birth-registry-modal.component';

export interface PeriodicElement {
  id: string;
  fname: string;
  lname: string;
  // pob: string;
  dob: string;
  // amountPrice: string;
  processTime: string;
  issuedDate: string;
  releasedDate: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 'REFN-02112', fname: 'Jenny', lname: 'Lopez', dob: '03/08/1985', processTime: 'LOCAL COPY', issuedDate: '09/08/2019', releasedDate: '09/09/2019', actions: ''},
  {id: 'REFN-01201', fname: 'Michael', lname: 'Angelo', dob: '04/30/1987', processTime: 'LOCAL COPY',  issuedDate: '08/22/2019',  releasedDate: '08/23/2019', actions: ''},
  {id: 'REFN-00011', fname: 'Carlo', lname: 'Laurenciano', dob: '10/11/1994', processTime: 'LOCAL COPY',  issuedDate: '08/05/2019', releasedDate: '08/06/2019', actions: ''},
  {id: 'REFN-02311', fname: 'Kristine', lname: 'Valenciano', dob: '05/29/1993', processTime: 'LOCAL COPY',  issuedDate: '10/02/2019', releasedDate: '10/03/2019', actions: ''},
  {id: 'REFN-19463', fname: 'Omar', lname: 'Sandeep', dob: '09/05/1989', processTime: 'SECPA',  issuedDate: '05/30/2019', releasedDate: '06/04/2019', actions: ''},
  {id: 'REFN-57394', fname: 'Angelica', lname: 'Zamora', dob: '10/26/1996', processTime: 'SECPA',  issuedDate: '09/02/2019', releasedDate: '09/07/2019', actions: ''},
  {id: 'REFN-66473', fname: 'Liza', lname: 'Garcia', dob: '04/10/2012', processTime: 'SECPA W/ TRANSMITTAL',  issuedDate: '03/10/2019', releasedDate: '03/15/2019', actions: ''},
  {id: 'REFN-00998', fname: 'Eric', lname: 'Elizan', dob: '07/21/1962', processTime: 'LOCAL COPY', issuedDate: '06/08/2019', releasedDate: '6/09/2019', actions: ''},
  {id: 'REFN-87634', fname: 'Daniel', lname: 'Martinez', dob: '11/18/1992', processTime: 'SECPA',  issuedDate: '09/18/2019', releasedDate: '09/23/2019', actions: ''},
  {id: 'REFN-68469', fname: 'Catherine', lname: 'Santos', dob: '04/01/1990', processTime: 'SECPA W/ TRANSMITTAL',  issuedDate: '05/05/2019', releasedDate: '05/10/2019', actions: ''},
];

@Component({
  selector: 'mis-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.scss']
})

export class BirthComponent implements OnInit {

  // displayedColumns: string[] = ['id', 'fname', 'lname', 'pob', 'dob', 'amountPrice', 'processTime', 'issuedDate', 'releasedDate', 'actions'];
  displayedColumns: string[] = ['id', 'fname', 'lname', 'dob', 'processTime', 'issuedDate', 'releasedDate', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addModal() {
    this.dialog.open(BirthRegistryModalComponent, {
      width: '800px',
      height: '600px'
    });
  }

  // view() {
  //   // this.dialog.open(CertificateModalComponent, {
  //   //   width: '600px'
  //   // });
  // }

  edit() {
    this.dialog.open(BirthRegistryModalComponent, {
      width: '800px',
      height: '600px'
    });
  }

  delete() {
    this.dialog.open(DeleteModalComponent, {
      width: '600px'
    });
  }

}
