import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatInputModule, MatIconModule, MatGridListModule } from '@angular/material';
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
import { MaterialModule } from '../shared/material/material.module';
import { AreaChartComponent } from './dashboard/widgets/area-chart/area-chart.component';
import { AreaMultipleChartComponent } from './dashboard/widgets/area-multiple-chart/area-multiple-chart.component';
import { ColumnAreaLineChartComponent } from './dashboard/widgets/column-area-line-chart/column-area-line-chart.component';
import { ColumnChartComponent } from './dashboard/widgets/column-chart/column-chart.component';
import { DonutChartComponent } from './dashboard/widgets/donut-chart/donut-chart.component';
import { FunnelChartComponent } from './dashboard/widgets/funnel-chart/funnel-chart.component';
import { LineChartComponent } from './dashboard/widgets/line-chart/line-chart.component';
import { PieChartComponent } from './dashboard/widgets/pie-chart/pie-chart.component';
import { StackedColumnChartComponent } from './dashboard/widgets/stacked-column-chart/stacked-column-chart.component';

import { FusionChartsModule } from 'angular-fusioncharts';
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
// Load Maps
import * as Maps from 'fusioncharts/fusioncharts.maps';
// Load WorldMap definition
import * as World from 'fusioncharts/maps/fusioncharts.world';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { BirthComponent } from './civil-registry/birth/birth.component';
import { MarriageComponent } from './civil-registry/marriage/marriage.component';
import { DeathComponent } from './civil-registry/death/death.component';
import { RealPropertyTaxComponent } from './collections/real-property-tax/real-property-tax.component';
import { QueueingAndSmsComponent } from './queueing-and-sms/queueing-and-sms.component';
import { GeneralCollectionComponent } from './collections/general-collection/general-collection.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

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
  declarations: [DashboardComponent, StatisticsComponent, DocumentsComponent, IdSystemComponent, CertificationsComponent, ClearancesComponent, PermitsComponent, BasicAcctngComponent,
    AreaChartComponent,
    AreaMultipleChartComponent,
    ColumnAreaLineChartComponent,
    ColumnChartComponent,
    DonutChartComponent,
    FunnelChartComponent,
    LineChartComponent,
    PieChartComponent,
    StackedColumnChartComponent,
    BirthComponent,
    MarriageComponent,
    DeathComponent,
    RealPropertyTaxComponent,
    QueueingAndSmsComponent,
    GeneralCollectionComponent],
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
    RouterModule.forChild(routes),
    MaterialModule,
    FusionChartsModule
  ],
  exports: [
    RouterModule
  ]
})
export class FeaturesModule { }
