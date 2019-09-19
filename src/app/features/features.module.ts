import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DocumentsComponent } from './documents/documents.component';
import { IdSystemComponent } from './id-system/id-system.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'id-system', component: IdSystemComponent },
];

@NgModule({
  declarations: [DashboardComponent, StatisticsComponent, DocumentsComponent, IdSystemComponent],
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
