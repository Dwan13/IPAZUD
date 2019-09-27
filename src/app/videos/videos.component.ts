import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  
  posts = [];

  Buscar(){
    this.dataService.getDataVideo().subscribe(data => {
      
      console.log(data);
      this.posts = data;
    });
    alert('hello');
  }

  constructor(private dataService: DataService) { 
    
  }

  ngOnInit() {
    
  }

  

}
