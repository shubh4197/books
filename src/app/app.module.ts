import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavComponent } from './nav/nav.component';
import { ViewComponent } from './view/view.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavComponent,
    ViewComponent,
    CartComponent,
    HomeComponent,
    PlaceorderComponent,
    OrdersummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
