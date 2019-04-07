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
		this.bugOperations
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}
	
	onNewBugCreated(newBug : Bug){
		this.bugs.push(newBug);
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => {
				this.bugOperations
					.remove(closedBug)
					.subscribe(() => this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id));
			})
	}

	getClosedCount(){
		
	}


}