import { Bug } from '../models/Bug';

export class BugOperationsService{
	createNew(newBugName : string) : Bug {
		let newBug = {
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		return newBug;
	}

	toggle(bugToToggle : Bug) : void{
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}
}