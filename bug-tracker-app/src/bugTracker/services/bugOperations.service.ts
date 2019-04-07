import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugApiService } from './bugApi.service';
import { Observable } from 'rxjs';

@Injectable()
export class BugOperationsService{

	constructor(private bugApi : BugApiService){

	}

	getAll() : Observable<Bug[]> {
		return this.bugApi.getAll();
	}

	createNew(newBugName : string) : Observable<Bug> {
		let newBugData = {
			id : 0,
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		return this.bugApi
			.save(newBugData);
	}

	toggle(bugToToggle : Bug) : Observable<Bug> {
		bugToToggle.isClosed = !bugToToggle.isClosed;
		return this.bugApi
			.save(bugToToggle);
	}

	remove(bug : Bug) : Observable<any> {
		return this.bugApi
			.remove(bug);
	}
}