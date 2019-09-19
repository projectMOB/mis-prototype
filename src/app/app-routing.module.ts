import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { IdSystemComponent } from './features/id-system/id-system.component';
import { StatisticsComponent } from './features/statistics/statistics.component';

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
      }
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
