import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  image:string="";
  title:string="";
  price:number=0;
  img:string="";
  index:number=0;
  author:string="";
  constructor(private Data:DataServiceService,private route:ActivatedRoute,private cart:CartService) { }

  ngOnInit() {
   this.index=parseInt(this.route.snapshot.paramMap.get('id'));
   this.img=this.Data.book[this.index].image;
   this.title=this.Data.book[this.index].title;
   this.price=this.Data.book[this.index].price;
   this.author=this.Data.book[this.index].author;
  }

  addtocart()
  {
   this.cart.add(this.cart.cart.length,this.title,this.price,this.author) ;
   console.log(this.cart.cart);
  }

}
