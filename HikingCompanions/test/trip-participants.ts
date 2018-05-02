import { User } from './user'

export class TripParticipants {
	private userlist:User[];
	private waitlist:User[];
	private maxNumParticipants:number;
	private currentNumParticipants:number;

	constructor(){
		this.userlist = new Array<User>();

	}
}
