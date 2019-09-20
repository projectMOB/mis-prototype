import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { AddAcctngModalComponent } from 'src/app/components/modals/add-acctng-modal/add-acctng-modal.component';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';

export interface PeriodicElement {
  id: string;
  account: string;
  amount: string;
  discount: string;
  netAssess: string;
  paymentDisc: string;
  actualPayment: string;
  creditMemo: string;
  debitRefund: string;
  balance: string;
  remarks: string;
  seq: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: '', account: 'ENROLLMENT', amount: '', discount: '', netAssess: '', paymentDisc: '', actualPayment: '', creditMemo: '', debitRefund: '', balance: '', remarks: '', seq: ''},
  { id: '', account: 'Enrollment Total: ', amount: '0.00', discount: '0.00', netAssess: '0.00', paymentDisc: '0.00', actualPayment: '0.00', creditMemo: '0.00', debitRefund: '0.00', balance: '0.00', remarks: '', seq: ''},
  { id: '', account: 'SY Total: ', amount: '0.00', discount: '0.00', netAssess: '0.00', paymentDisc: '0.00', actualPayment: '0.00', creditMemo: '0.00', debitRefund: '0.00', balance: '0.00', remarks: '', seq: ''},
  // {id: 'REFN-00011', certType: 'Certificate of Live Birth', fname: 'Carlo', lname: 'Laurenciano', issuedDate: '08/05/2019', validUntil: '', amountPrice: '155', actions: ''},
  // {id: 'REFN-02311', certType: 'Community Tax Certificate', fname: 'Kristine', lname: 'Valenciano', issuedDate: '12/08/2021',  validUntil: '12/08/2022', amountPrice: '155', actions: ''},
  // {id: 'REFN-19463', certType: 'Community Tax Certificate', fname: 'Omar', lname: 'Sandeep', issuedDate: '05/30/2020', validUntil: '05/30/2021', amountPrice: '155', actions: ''},
  // {id: 'REFN-57394', certType: 'Certificate of Marriage', fname: 'Angelica', lname: 'Zamora', issuedDate: '09/08/2019', validUntil: '01/01/2020', amountPrice: '155', actions: ''},
  // {id: 'REFN-66473', certType: 'Certificate of Marriage', fname: 'Liza', lname: 'Garcia', issuedDate: '09/08/2019', validUntil: '11/01/2021', amountPrice: '155', actions: ''},
  // {id: 'REFN-00998', certType: 'Certificate of Death', fname: 'Eric', lname: 'Elizan', issuedDate: '09/08/2019', validUntil: '', amountPrice: '155', actions: ''},
  // {id: 'REFN-87634', certType: 'Community Tax Certificate', fname: 'Daniel', lname: 'Martinez', issuedDate: '09/08/2019', validUntil: '09/08/2020', amountPrice: '155', actions: ''},
  // {id: 'REFN-68469', certType: 'Community Tax Certificate', fname: 'Catherine', lname: 'Santos', issuedDate: '05/05/2020', validUntil: '05/05/2021', amountPrice: '155', actions: ''},
];

@Component({
  selector: 'mis-basic-acctng',
  templateUrl: './basic-acctng.component.html',
  styleUrls: ['./basic-acctng.component.scss']
})
export class BasicAcctngComponent implements OnInit {

  displayedColumns: string[] = ['id', 'account', 'amount', 'discount', 'netAssess', 'paymentDisc', 'actualPayment', 'creditMemo', 'debitRefund', 'balance', 'remarks', 'seq'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor( public dialog: MatDialog ) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  addNewAcctng(){
    this.dialog.open(AddAcctngModalComponent, {
      width: '600px'
    });
  }

  deleteAcctng(){
    this.dialog.open(DeleteModalComponent, {
      width: '600px'
    });
  }
}