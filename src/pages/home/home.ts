import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	posts: any;

  constructor(public navCtrl: NavController, public http: Http) {

  	this.http.get('https://sheetsu.com/apis/v1.0/ac6ca9c83329').map(res => res.json()).subscribe(data => {
  		this.posts = data.data.children;
  	})
  }

}
