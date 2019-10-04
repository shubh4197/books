import { Injectable } from '@angular/core';
import {Order} from './order.modal';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order:Order;
  constructor() { }
}
