import { Users } from './models/users';
import { Images } from './utils/images';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
//declare function require(path: string);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./resources/css/style.css']
})
export class AppComponent
{
	//logo = require('../resources/images/angular-logo.svg');
	title = 'Test Models and Services';
	Users: Array<Users>;

	constructor(private http: Http)
	{
		this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(resp => this.Users = resp.json());
	}
}
