import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import configuration from '../../config/config';

@Injectable()
export class BugApiService{

	private serviceUrl = configuration.bugServiceEndPoint;

	constructor(private httpClient : HttpClient){

	}

	getAll() : Observable<Bug[]>{
		return this.httpClient
			.get<Bug[]>(this.serviceUrl)
	}

	save(bugData : Bug) : Observable<Bug>{
		if (bugData.id === 0){
			return this.httpClient
				.post<Bug>(this.serviceUrl, bugData);
		} else {
			return this.httpClient
				.put<Bug>(`${this.serviceUrl}/${bugData.id}`, bugData);
		}
	}

	remove(bugData : Bug) : Observable<any>{
		return this.httpClient
				.delete<Bug>(`${this.serviceUrl}/${bugData.id}`);
	}
}	

