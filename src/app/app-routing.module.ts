import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Imports
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ThanksComponent } from './thanks/thanks.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'itemdetails', component: ItemdetailsComponent},
  { path: 'productlist', component: ProductlistComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
