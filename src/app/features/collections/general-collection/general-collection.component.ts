import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { GeneralCollectionModalComponent } from 'src/app/components/modals/general-collection-modal/general-collection-modal.component';



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
  {formNo: '1', receiptNo: 'GEN1014101', receiptDate: '2019-10-14', payer: 'David Solomon', address: 'Barangay 1', totalAmount: '1,205.00', collector: 'Collector 1'},
  {formNo: '2', receiptNo: 'GEN10141902', receiptDate: '2019-10-14', payer: 'Juan Dela Cruz', address: 'Barangay 2', totalAmount: ',600.00', collector: 'Collector 2'},
  {formNo: '3', receiptNo: 'GEN10141903', receiptDate: '2019-10-14', payer: 'Romina Delos Santos', address: 'Barangay 3', totalAmount: '125.00', collector: 'Collector 3'},
  {formNo: '4', receiptNo: 'GEN10141904', receiptDate: '2019-10-14', payer: 'Angelita Del Mondo', address: 'Barangay 4', totalAmount: '986.00', collector: 'Collector 1'},
];

@Component({
  selector: 'mis-general-collection',
  templateUrl: './general-collection.component.html',
  styleUrls: ['./general-collection.component.scss']
})
export class GeneralCollectionComponent implements OnInit {

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
    this.dialog.open(GeneralCollectionModalComponent, {
      width: '1300px'
    });
  }

  view() {
    this.dialog.open(GeneralCollectionModalComponent, {
      width: '1300px'
    });
  }

  edit() {
    this.dialog.open(GeneralCollectionModalComponent, {
      width: '1300px'
    });
  }

  delete() {
    this.dialog.open(DeleteModalComponent, {
      width: '600px'
    });
  }

}
