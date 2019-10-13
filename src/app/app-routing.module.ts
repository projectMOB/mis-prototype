import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { IdSystemComponent } from './features/id-system/id-system.component';
import { StatisticsComponent } from './features/statistics/statistics.component';
import { CertificationsComponent } from './features/documents/certifications/certifications.component';
import { ClearancesComponent } from './features/documents/clearances/clearances.component';
import { PermitsComponent } from './features/documents/permits/permits.component';
import { BasicAcctngComponent } from './features/accounting/basic-acctng/basic-acctng.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RealPropertyTaxComponent } from './features/collections/real-property-tax/real-property-tax.component';
import { BirthComponent } from './features/civil-registry/birth/birth.component';
import { MarriageComponent } from './features/civil-registry/marriage/marriage.component';
import { DeathComponent } from './features/civil-registry/death/death.component';
import { QueueingAndSmsComponent } from './features/queueing-and-sms/queueing-and-sms.component';
import { GeneralCollectionComponent } from './features/collections/general-collection/general-collection.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, 
    children :[
      {
        path: 'id',
        component: IdSystemComponent
      },
      {
        path: 'statistics',
        component: StatisticsComponent
      },
      {
        path: 'certificates',
        component: CertificationsComponent
      },
      {
        path: 'clearances',
        component: ClearancesComponent
      },
      {
        path: 'permits',
        component: PermitsComponent
      },
      {
        path: 'acctng',
        component: BasicAcctngComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'real-property-tax',
        component: RealPropertyTaxComponent
      },
      {
        path: 'general-collection',
        component: GeneralCollectionComponent
      },
      {
        path: 'birth',
        component: BirthComponent
      },
      {
        path: 'marriage',
        component: MarriageComponent
      },
      {
        path: 'death',
        component: DeathComponent
      },
      {
        path: 'queueing-and-sms',
        component: QueueingAndSmsComponent
      },
    ]
  },
  { path: 'id', component: IdSystemComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
