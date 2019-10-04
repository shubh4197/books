import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Books } from '../book.modal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  user:Books[]=[];
  constructor(public Data:DataServiceService) { }
  
  ngOnInit() {
    this.user.push(new Books(this.user.length,'The Alchemist',150,'Paulo Coelho','assets/images/alchemist.jpg'));
   this.user.push(new Books(this.user.length,'1984',180,'George Orwell','assets/images/1984.jpg'));
   this.user.push(new Books(this.user.length,'The Great Gatsby',200,'F. Scott Fitzgerald','assets/images/gatsby.jpg'));
   this.user.push(new Books(this.user.length,'The Old Man and the Sea',200,'Ernest Hemingway','assets/images/oldman.jpg'));
   this.user.push(new Books(this.user.length,'The Hobbit  There and Back Again',300,'J.R.R. Tolkien','assets/images/hobbit.jpg'));
   this.user.push(new Books(this.user.length,'Murder on the Orient Express',250,'Agatha Christie','assets/images/orient.jpg'));
   this.user.push(new Books(this.user.length,'The Little Prince',220,'Antoine de Saint-Exupéry','assets/images/price.jpg'));
   this.user.push(new Books(this.user.length,'The Metamorphosis',350,'Franz Kafka','assets/images/meta.jpg'));
   this.user.push(new Books(this.user.length,'A Study in Scarlet',200,'Arthur Conan Doyle','assets/images/sherlock.jpg'));
   this.user.push(new Books(this.user.length,'Do Androids Dream of Electric Sheep?',450,'Philip K. Dick','assets/images/blade.jpg'));
   this.user.push(new Books(this.user.length,'Chess Story',300,'Stefan Zweig','assets/images/chess.jpg'));
   this.user.push(new Books(this.user.length,'The Time Machine',450,'H.G Wells','assets/images/time.jpg'));
   this.Data.book=this.user;
   console.log(this.Data.book);
  }

}
