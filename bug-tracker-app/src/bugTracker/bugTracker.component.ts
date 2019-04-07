import { Component } from '@angular/core';

interface Bug{
	name : string,
	isClosed : boolean
}

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	onAddNewClick(newBugName : string){

		let newBug : Bug = {
			name : newBugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugNameClick(bugToToggle : Bug){
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}


}