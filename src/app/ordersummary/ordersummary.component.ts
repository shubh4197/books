import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {
  name:string="";
  line1:string="";
  line2:string="";
  city:string="";
  state:string="";
  
  
  constructor(private orders:CartService,private items:OrderService) { }

  ngOnInit() {
    this.name=this.items.order.name;
    this.line1=this.items.order.line1;
    this.line2=this.items.order.line2;
    this.city=this.items.order.city;
    this.state=this.items.order.state;
  }

}
