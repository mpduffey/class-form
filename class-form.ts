import {Component, Input, OnInit} 	from '@angular/core';
import {DataService}								from 'modules/data-service/data-service';

@Component({
	selector:			'class-form',
	template:			`
		<reactive-form [formObject]="orientDBClassFormObject"></reactive-form>
	`
})

export class ClassForm implements OnInit {
	constructor(private data:DataService) {}
	ngOnInit() {
		this.orientDBClassForm = {
			submit:     	function(x){console.log(x)},
			submitLabel:	"Save",
			controls:   	[
				{
					type: "fieldset",
					name: "Class Group",
					fields: [
						{classField: this.data.orientDBClassSchema[0]},
						{classField: this.data.orientDBClassSchema[1]},
						{classField: this.data.orientDBClassSchema[2]},
						{classField: this.data.orientDBClassSchema[3]},
						{classField: this.data.orientDBClassSchema[4]},
						{classField: this.data.orientDBClassSchema[5]}
					]
				},
				{
					type: "fieldset",
					name: "Class Group",
					fields: [
						{classField: this.data.orientDBClassSchema[6]},
						{classField: this.data.orientDBClassSchema[7]},
						{classField: this.data.orientDBClassSchema[8]},
						{classField: this.data.orientDBClassSchema[9]}
					]
				},
			]
		};
		this.orientDBClassFormObject = {
			fieldObject:		this.data.orientDBClassSchema,
			formObject:			this.orientDBClassForm
		};
	}
}