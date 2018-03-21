export class User {
	private name:string;
	private age:number;
	private email:string;
	private address:Address;
	private pastTrips:Trip[];
	private upcomingTrips:Trip[];

	constructor(name:string, email:string, address:Address){
		this.name = name;
		this. email = email;
		this.address = address;
	}

	getName(){
		return this.name;
	}
	setName(name:string){
		this.name = name;
	}
	getAge(){
		return this.age;
	}
	setAge(age:number){
		this.age = age
	}

	getEmail(){
		return this.email;
	}
	setEmail(email:string){
		this.email = email;
	}
	getAddress(){
		return this.address
	}
	setAddress(address:Address){
		this.address = address
	}

	getTripHistory(){
		return this.pastTrips;
	}
	createNewTrip(trip:Trip){
		this.upcomingTrips.push(trip);
	}
	getUpcomingTrip(){
		return this.upcominngTrips;
	}

}



interface Address{
	street:string,
	city:string,
	state:string
}
