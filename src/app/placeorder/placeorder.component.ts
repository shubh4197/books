import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {Order} from "../order.modal";
import { OrderService } from '../order.service';


@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  name:string="";
  line1:string="";
  line2:string="";
  city:string="";
  state:string="";
  credit:string="";
  user:Order;

  constructor(private cart:CartService,private order:OrderService) { }

  ngOnInit() {
  }

  place(){
    this.user=new Order(this.name,this.line1,this.line2,this.city,this.state,this.credit);
    this.user.content=this.cart.cart;
    this.order.order=this.user;
    console.log(this.order.order);
  }

}
