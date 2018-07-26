import { Component } from '@angular/core';
import { Http } from '@angular/http';
declare function require(path: string);

@Component({
  selector: 'headerSimple',
  templateUrl: '../templates/headers/headerSimple.component.html'
})

export class Images
{
	public logo = require('../resources/images/angular-logo.svg');
}