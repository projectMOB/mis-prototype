import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DocumentsComponent } from './documents/documents.component';
import { IdSystemComponent } from './id-system/id-system.component';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './documents/certifications/certifications.component';
import { ClearancesComponent } from './documents/clearances/clearances.component';
import { PermitsComponent } from './documents/permits/permits.component';
import { BasicAcctngComponent } from './accounting/basic-acctng/basic-acctng.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'id-system', component: IdSystemComponent },
  { path: 'certificates', component: CertificationsComponent },
  { path: 'clearances', component: ClearancesComponent },
  { path: 'permits', component: PermitsComponent },
];

@NgModule({
  declarations: [DashboardComponent, StatisticsComponent, DocumentsComponent, IdSystemComponent, CertificationsComponent, ClearancesComponent, PermitsComponent, BasicAcctngComponent],
  imports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeaturesModule { }
