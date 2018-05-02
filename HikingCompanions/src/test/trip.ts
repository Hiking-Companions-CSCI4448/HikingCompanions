export class Trip {
	private date:Date
	private time:Time
	private destination:string

	constructor(date:Date,time:Time,destination:string){
		this.date = date;
		this.time = time;
		this.destination = destination;
	}


	getDate(){
		return this.date;
	}
	setDate(date:Date){
		this.date = date;
	}
	getTime(){
		return this.time;
	}
	setTime(time:Time){
		this.time = time;
	}
	getDestination(){
		return this.destination
	}
	setDestination(destination:string){
		this.destination = destination;
	}
}

interface Time{
	hour:Number,
	minute:Number
}

