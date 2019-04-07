import { Component } from '@angular/core';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : string[] = [];

	onAddNewClick(newBugName : string){
		this.bugs.push(newBugName);
	}
}