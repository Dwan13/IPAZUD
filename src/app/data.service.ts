import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import{PostVideo} from './videos/PostVideo'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http: HttpClient) {
    console.log('service is working');
   }

   

  getDataVideo(){
    

    return this.http.get<PostVideo[]>('http://localhost:3000/videos')
  }


}
