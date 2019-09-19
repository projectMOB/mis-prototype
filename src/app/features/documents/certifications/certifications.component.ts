import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { CertificateModalComponent } from 'src/app/components/modals/certificate-modal/certificate-modal.component';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';

export interface PeriodicElement {
  id: string;
  certType: string;
  fname: string;
  lname: string;
  issuedDate: string;
  validUntil: string;
  amountPrice: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 'REFN-02112', certType: 'Certificate of Live Birth', fname: 'Jenny', lname: 'Lopez', issuedDate: '09/08/2019', validUntil: '', amountPrice: '155', actions: ''},
  {id: 'REFN-01201', certType: 'Community Tax Certificate', fname: 'Michael', lname: 'Angelo', issuedDate: '08/22/2019', validUntil: '09/12/2020', amountPrice: '155', actions: ''},
  {id: 'REFN-00011', certType: 'Certificate of Live Birth', fname: 'Carlo', lname: 'Laurenciano', issuedDate: '08/05/2019', validUntil: '', amountPrice: '155', actions: ''},
  {id: 'REFN-02311', certType: 'Community Tax Certificate', fname: 'Kristine', lname: 'Valenciano', issuedDate: '12/08/2021',  validUntil: '12/08/2022', amountPrice: '155', actions: ''},
  {id: 'REFN-19463', certType: 'Community Tax Certificate', fname: 'Omar', lname: 'Sandeep', issuedDate: '05/30/2020', validUntil: '05/30/2021', amountPrice: '155', actions: ''},
  {id: 'REFN-57394', certType: 'Certificate of Marriage', fname: 'Angelica', lname: 'Zamora', issuedDate: '09/08/2019', validUntil: '01/01/2020', amountPrice: '155', actions: ''},
  {id: 'REFN-66473', certType: 'Certificate of Marriage', fname: 'Liza', lname: 'Garcia', issuedDate: '09/08/2019', validUntil: '11/01/2021', amountPrice: '155', actions: ''},
  {id: 'REFN-00998', certType: 'Certificate of Death', fname: 'Eric', lname: 'Elizan', issuedDate: '09/08/2019', validUntil: '', amountPrice: '155', actions: ''},
  {id: 'REFN-87634', certType: 'Community Tax Certificate', fname: 'Daniel', lname: 'Martinez', issuedDate: '09/08/2019', validUntil: '09/08/2020', amountPrice: '155', actions: ''},
  {id: 'REFN-68469', certType: 'Community Tax Certificate', fname: 'Catherine', lname: 'Santos', issuedDate: '05/05/2020', validUntil: '05/05/2021', amountPrice: '155', actions: ''},
];

@Component({
  selector: 'mis-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'certType', 'fname', 'lname', 'issuedDate', 'validUntil', 'amountPrice', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addModal() {
    this.dialog.open(CertificateModalComponent, {
      width: '600px'
    });
  }

  view() {
    this.dialog.open(CertificateModalComponent, {
      width: '600px'
    });
  }

  edit() {
    this.dialog.open(CertificateModalComponent, {
      width: '600px'
    });
  }

  delete() {
    this.dialog.open(DeleteModalComponent, {
      width: '600px'
    });
  }

}
