import { Injectable } from '@angular/core';
import {Books} from './book.modal'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Books[]=[];
  sum:number=0;
  constructor() { }

  add(id,title,price,author)
  {
    this.cart.push(new Books(id,title,price,author,''));
    this.sum=this.sum+price;
  }
}
