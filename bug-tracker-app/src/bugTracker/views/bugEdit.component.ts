import { Component, EventEmitter, Output } from '@angular/core';
import { BugOperationsService } from '../services/bugOperations.service';
import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" #txtNewBugName>
			<input type="button" value="Add New" (click)="onAddNewClick(txtNewBugName.value)">
		</section>
	`
})
export class BugEditComponent{

	@Output()
	bugCreated : EventEmitter<Bug> = new EventEmitter<Bug>()

	constructor(private bugOperations : BugOperationsService){

	}
	onAddNewClick(newBugName : string){
		let newBug : Bug = this.bugOperations.createNew(newBugName);
		//this.bugs.push(newBug);
		this.bugCreated.emit(newBug);
	}
}