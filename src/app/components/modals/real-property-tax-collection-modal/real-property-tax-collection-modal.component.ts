import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

export interface PaymentDetails {
  isPay: boolean;
  tdNo: string;
  declaredOwner: string;
  fromYear: string;
  fromQtr: string;
  toYear: string;
  toQtr: string;
  amountDue: string;
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
  { isPay: false, tdNo: '', declaredOwner: '', fromYear: '', fromQtr: '', toYear: '', toQtr: '', amountDue: ''},
  { isPay: false, tdNo: '', declaredOwner: '', fromYear: '', fromQtr: '', toYear: '', toQtr: '', amountDue: ''},
  { isPay: false, tdNo: '', declaredOwner: '', fromYear: '', fromQtr: '', toYear: '', toQtr: '', amountDue: ''},
];

const ELEMENT_DATA_OTHERS: OtherPaymentDetails[] = [
  { type: '', particulars: '', amount: ''},
];


@Component({
  selector: 'mis-real-property-tax-collection-modal',
  templateUrl: './real-property-tax-collection-modal.component.html',
  styleUrls: ['./real-property-tax-collection-modal.component.scss']
})
export class RealPropertyTaxCollectionModalComponent implements OnInit {

  displayedColumns: string[] = ['isPay', 'tdNo', 'declaredOwner', 'fromYear', 'fromQtr', 'toYear', 'toQtr', 'amountDue'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumnsOthers: string[] = ['type', 'particulars', 'amount'];
  dataSourceOthers = new MatTableDataSource(ELEMENT_DATA_OTHERS);
  paymentData = payment;


  constructor() { }

  ngOnInit() {
  }

}
