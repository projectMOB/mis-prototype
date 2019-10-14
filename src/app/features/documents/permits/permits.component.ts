import { Component, OnInit, ViewChild } from '@angular/core';
import { PermitModalComponent } from 'src/app/components/modals/permit-modal/permit-modal.component';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  id: string;
  permitType: string;
  ownerName: string;
  scopeWork: string;
  appliedDate: string;
  issuedDate: string;
  amountPrice: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 'REFN-02112', permitType: 'Building Permit', ownerName: 'Jenny Lopez', scopeWork: 'New Construction', appliedDate: '09/12/2020', issuedDate: '09/08/2019', amountPrice: '400', actions: ''},
  {id: 'REFN-01201', permitType: 'Building Permit', ownerName: 'Michael Angelo', scopeWork: 'Renovation', appliedDate: '09/12/2020',  issuedDate: '08/22/2019', amountPrice: '400', actions: ''},
  {id: 'REFN-00011', permitType: 'Electrical Permit', ownerName: 'Carlo Laurenciano', scopeWork: 'Alteration', appliedDate: '09/12/2020',  issuedDate: '08/05/2019', amountPrice: '200', actions: ''},
  {id: 'REFN-02311', permitType: 'Mechanical Permit', ownerName: 'Kristine Valenciano', scopeWork: 'Repair', appliedDate: '09/12/2020',  issuedDate: '12/08/2021', amountPrice: '90', actions: ''},
  {id: 'REFN-19463', permitType: 'Electrical Permit', ownerName: 'Omar Sandeep', scopeWork: 'Renovation', appliedDate: '09/12/2020',  issuedDate: '05/30/2020', amountPrice: '400', actions: ''},
  {id: 'REFN-57394', permitType: 'Occupancy Permit', ownerName: 'Angelica Zamora', scopeWork: 'Raising', appliedDate: '09/12/2020',  issuedDate: '09/08/2019', amountPrice: '90', actions: ''},
  {id: 'REFN-66473', permitType: 'Occupancy Permit', ownerName: 'Liza Garcia', scopeWork: 'New Construction', appliedDate: '09/12/2020',  issuedDate: '09/08/2019', amountPrice: '200', actions: ''},
  {id: 'REFN-00998', permitType: 'Fencing Permit', ownerName: 'Eric Elizan', scopeWork: 'Garine Auto-Repair Shop', appliedDate: '09/12/2020',  issuedDate: '09/08/2019', amountPrice: '200', actions: ''},
  {id: 'REFN-87634', permitType: 'Building Permit', ownerName: 'Daniel Martinez', scopeWork: 'Alteration', appliedDate: '09/12/2020',  issuedDate: '09/08/2019', amountPrice: '90', actions: ''},
  {id: 'REFN-68469', permitType: 'Mechanical Permit', ownerName: 'Catherine Santos', scopeWork: 'New Construction', appliedDate: '09/12/2020',  issuedDate: '05/05/2020', amountPrice: '90', actions: ''},
];

@Component({
  selector: 'mis-permits',
  templateUrl: './permits.component.html',
  styleUrls: ['./permits.component.scss']
})
export class PermitsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'permitType', 'ownerName', 'scopeWork', 'appliedDate', 'issuedDate', 'amountPrice', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( public dialog: MatDialog ) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addModal() {
    this.dialog.open(PermitModalComponent, {
      width: '600px',
      height: '600px'
    });
  }

  view() {
    this.dialog.open(PermitModalComponent, {
      width: '600px',
      height: '600px'
    });
  }

  edit() {
    this.dialog.open(PermitModalComponent, {
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
