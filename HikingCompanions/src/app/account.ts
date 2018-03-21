import { DataService } from './services/data.service';

export class Account {
	private username:string;
	private password:string;

	constructor(username, password, private dataService:DataService){
		console.log('account constructor running..');
	}

	login(username, password){
		/*controller pass the query to database*/
		/*return true if succes, false if fail */
	}


}
