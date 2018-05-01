import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TripCreateComponent implements OnInit {

  trip = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveTrip() {
    this.http.post('/trip', this.trip)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/trip-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}