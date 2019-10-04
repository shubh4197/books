import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ViewComponent } from './view/view.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';

const routes: Routes = [{path:"",pathMatch:"full",component:CardComponent},
                        {path:"view/:id",component:ViewComponent},
                        {path:"cart",component:CartComponent},
                        {path:"place",component:PlaceorderComponent},
                      {path:"summary",component:OrdersummaryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
