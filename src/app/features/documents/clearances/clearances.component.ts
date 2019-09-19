import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ClearanceModalComponent } from 'src/app/components/modals/clearance-modal/clearance-modal.component';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';

export interface PeriodicElement {
  id: string;
  clearanceType: string;
  regName: string;
  tradeName: string;
  issuedDate: string;
  validUntil: string;
  amountPrice: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 'REFN-02112', clearanceType: 'Tax Declaration', regName: 'Jenny Lopez', tradeName: 'ABC Company', issuedDate: '09/08/2019', validUntil: '', amountPrice: '400', actions: ''},
  {id: 'REFN-01201', clearanceType: 'Tax Declaration', regName: 'Michael Angelo', tradeName: 'XYZ Solutions', issuedDate: '08/22/2019', validUntil: '09/12/2020', amountPrice: '400', actions: ''},
  {id: 'REFN-00011', clearanceType: 'Fire Safety Certificate', regName: 'Carlo Laurenciano', tradeName: 'McBee Eatery', issuedDate: '08/05/2019', validUntil: '', amountPrice: '200', actions: ''},
  {id: 'REFN-02311', clearanceType: 'Sanitary Permit', regName: 'Kristine Valenciano', tradeName: 'Mr. Barbers Barbershop', issuedDate: '12/08/2021',  validUntil: '12/08/2022', amountPrice: '90', actions: ''},
  {id: 'REFN-19463', clearanceType: 'Tax Declaration', regName: 'Omar Sandeep', tradeName: 'Mobile Legends Computer Shop', issuedDate: '05/30/2020', validUntil: '05/30/2021', amountPrice: '400', actions: ''},
  {id: 'REFN-57394', clearanceType: 'Sanitary Permit', regName: 'Angelica Zamora', tradeName: 'Annyeeong Korean Restaurant', issuedDate: '09/08/2019', validUntil: '01/01/2020', amountPrice: '90', actions: ''},
  {id: 'REFN-66473', clearanceType: 'Fire Safety Certificate', regName: 'Liza Garcia', tradeName: 'Ala Eh! Cafe', issuedDate: '09/08/2019', validUntil: '11/01/2021', amountPrice: '200', actions: ''},
  {id: 'REFN-00998', clearanceType: 'Fire Safety Certificate', regName: 'Eric Elizan', tradeName: 'Garine Auto-Repair Shop', issuedDate: '09/08/2019', validUntil: '', amountPrice: '200', actions: ''},
  {id: 'REFN-87634', clearanceType: 'Sanitary Permit', regName: 'Daniel Martinez', tradeName: 'Say, Cheese Photo Printing Center', issuedDate: '09/08/2019', validUntil: '09/08/2020', amountPrice: '90', actions: ''},
  {id: 'REFN-68469', clearanceType: 'Sanitary Permit', regName: 'Catherine Santos', tradeName: 'Milky Tea Shop', issuedDate: '05/05/2020', validUntil: '05/05/2021', amountPrice: '90', actions: ''},
];

@Component({
  selector: 'mis-clearances',
  templateUrl: './clearances.component.html',
  styleUrls: ['./clearances.component.scss']
})
export class ClearancesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'clearanceType', 'regName', 'tradeName', 'issuedDate', 'validUntil', 'amountPrice', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addModal() {
    this.dialog.open(ClearanceModalComponent, {
      width: '600px'
    });
  }

  view() {
    this.dialog.open(ClearanceModalComponent, {
      width: '600px'
    });
  }

  edit() {
    this.dialog.open(ClearanceModalComponent, {
      width: '600px'
    });
  }

  delete() {
    this.dialog.open(DeleteModalComponent, {
      width: '600px'
    });
  }

}
