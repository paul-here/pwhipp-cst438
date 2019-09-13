import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Material-Angular reqs
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ShopnavComponent } from './shopnav/shopnav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductlistComponent,
    ItemdetailsComponent,
    CheckoutComponent,
    ThanksComponent,
    ShopnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Material-Angular reqs
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
