import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./components/css/app.component.css']
})
export class AppComponent
{
	title = 'app';
	my_notes =[
		{id: 1, title: 'Note 1', description: 'Description of the note 1'},
		{id: 2, title: 'Note 2', description: 'Description of the note 2'},
		{id: 3, title: 'Note 3', description: 'Description of the note 3'},
		{id: 4, title: 'Note 4', description: 'Description of the note 4'},
	];
	note = {id: null, title: null, description:null};
	show_form = false;
	addNote()
	{
		this.show_form = true;
	}
	cancel()
	{
		this.show_form = false;
	}
	createNote()
	{
		this.note.id = Date.now();
		this.my_notes.push(this.note);
		this.show_form = false;
		this.note = {id: null, title: null, description:null};
	}
}