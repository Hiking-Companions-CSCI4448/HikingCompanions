import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trips: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
	this.http.get('/trip').subscribe(data => {
    	this.trips = data;
  	});
  }

}
