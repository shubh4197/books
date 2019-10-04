import { Injectable } from '@angular/core';
import {Books} from './book.modal';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  book:Books[]=[]
  constructor() { }
  
}
