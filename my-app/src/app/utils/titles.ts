import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'titleSimple',
  styleUrls: ['../resources/css/style.css'],
  templateUrl: '../templates/titles/titleSimple.component.html'
})
export class Titles
{
	public title = 'Angular Services';
}