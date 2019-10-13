import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

export interface PaymentDetails {
  accountTitle: string;
  accountCode: string;
  fundCode: string;
  amountDue: string;
  remarks: string;
}

export interface OtherPaymentDetails {
  type: string;
  particulars: string;
  amount: string;
}

export class PaymentHeader{
  formNo: string;
  receiptNo: string;
  receiptDate: string;
  payer: string;
  address: string;
  totalAmount: string;
  collector: string;
}

const payment: PaymentHeader= {formNo: '1', receiptNo: 'REC10121901', receiptDate: '2019-10-12', payer: 'Ruben Andress', address: 'Barangay 1', totalAmount: '1,400', collector: 'Collector 1'}

const ELEMENT_DATA: PaymentDetails[] = [
  { accountTitle: '', accountCode: '', fundCode: '', amountDue: '', remarks: ''},
  { accountTitle: '', accountCode: '', fundCode: '', amountDue: '', remarks: ''},
  { accountTitle: '', accountCode: '', fundCode: '', amountDue: '', remarks: ''},
];

const ELEMENT_DATA_OTHERS: OtherPaymentDetails[] = [
  { type: '', particulars: '', amount: ''},
];

@Component({
  selector: 'mis-general-collection-modal',
  templateUrl: './general-collection-modal.component.html',
  styleUrls: ['./general-collection-modal.component.scss']
})
export class GeneralCollectionModalComponent implements OnInit {

  displayedColumns: string[] = ['accountTitle', 'accountCode', 'fundCode', 'amountDue', 'remarks'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumnsOthers: string[] = ['type', 'particulars', 'amount'];
  dataSourceOthers = new MatTableDataSource(ELEMENT_DATA_OTHERS);
  paymentData = payment;


  constructor() { }

  ngOnInit() {
  }

}
