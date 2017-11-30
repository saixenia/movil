import { Component } from '@angular/core';
import { Photos } from './model/photos';
import { Albums } from './model/albums';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Photos: Array<photos>;
  Albums: Array<albums>;
  constructor(private http: Http){
	this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(resp=>this.Photos=resp.json());
	this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe(resp=>this.Photos=resp.json());
  }
}
