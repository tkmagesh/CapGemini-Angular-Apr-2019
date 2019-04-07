import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	sortAttrName : string = 'name';
	sortDesc : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push({ name : 'Server communication failure', isClosed : false,  createdAt : new Date(2019, 3, 7, 9, 0, 0)});
		this.bugs.push({ name : 'User actions not recognized', isClosed : false,  createdAt : new Date(2019, 2, 7, 9, 0, 0)});
		this.bugs.push({ name : 'Application not responding', isClosed : false,  createdAt : new Date(2019, 3, 7, 13, 0, 0)});
		this.bugs.push({ name : 'Data integrity checks failed', isClosed : false,  createdAt : new Date(2019, 3, 5, 9, 0, 0)});
	}
	
	onNewBugCreated(newBug : Bug){
		this.bugs.push(newBug);
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations.toggle(bugToToggle);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		
	}


}