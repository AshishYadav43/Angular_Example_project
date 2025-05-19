import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ListingComponent } from './listing/listing.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'listing', component: ListingComponent},
  {path:'addlisting', component: ListingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
