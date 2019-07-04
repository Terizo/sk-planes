import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { 
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'flights', pathMatch: 'full' },
      { path: 'flights', loadChildren: './flights/flights.module#FlightsModule'},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
