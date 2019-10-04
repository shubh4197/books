import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Books } from '../book.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private Data:DataServiceService) { }

  ngOnInit() {
  
  }

}
