import { DataService } from './services/data.service';

export class Account {
	username:string;
	password:string;

	constructor(private dataService:DataService){
		console.log('account constructor running..');
	}

	login(username, password){
		/*controller pass the query to database*/
		/*return true if succes, false if fail */
	}


}
