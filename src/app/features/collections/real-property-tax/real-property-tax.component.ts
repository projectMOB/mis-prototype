import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { RealPropertyTaxCollectionModalComponent } from 'src/app/components/modals/real-property-tax-collection-modal/real-property-tax-collection-modal.component';



export interface PeriodicElement {
  formNo: string;
  receiptNo: string;
  receiptDate: string;
  payer: string;
  address: string;
  totalAmount: string;
  collector: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {formNo: '1', receiptNo: 'RPT10121901', receiptDate: '2019-10-12', payer: 'Ruben Andress', address: 'Barangay 1', totalAmount: '1,400', collector: 'Collector 1'},
  {formNo: '2', receiptNo: 'RPT10121902', receiptDate: '2019-10-12', payer: 'Mark Anthony Cruz', address: 'Barangay 2', totalAmount: '2,500', collector: 'Collector 2'},
  {formNo: '3', receiptNo: 'RPT10121903', receiptDate: '2019-10-12', payer: 'Luzviminda Santos', address: 'Barangay 3', totalAmount: '3,125', collector: 'Collector 3'},
  {formNo: '4', receiptNo: 'RPT10121904', receiptDate: '2019-10-12', payer: 'Rita Delos Angeles', address: 'Barangay 4', totalAmount: '1,850', collector: 'Collector 1'},
];

@Component({
  selector: 'mis-real-property-tax',
  templateUrl: './real-property-tax.component.html',
  styleUrls: ['./real-property-tax.component.scss']
})
export class RealPropertyTaxComponent  implements OnInit {

  displayedColumns: string[] = ['formNo', 'receiptNo', 'receiptDate', 'payer', 'address', 'totalAmount', 'collector', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addModal() {
    this.dialog.open(RealPropertyTaxCollectionModalComponent, {
      width: '1300px',
      height: '650px'
    });
  }

  view() {
    this.dialog.open(RealPropertyTaxCollectionModalComponent, {
      width: '1300px',
      height: '650px'
    });
  }

  edit() {
    this.dialog.open(RealPropertyTaxCollectionModalComponent, {
      width: '1300px',
      height: '650px'
    });
  }

  delete() {
    this.dialog.open(DeleteModalComponent, {
      width: '600px'
    });
  }
}

