import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TripDetailComponent implements OnInit {

  trip = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getTripDetail(this.route.snapshot.params['id']);
  }

  getTripDetail(id) {
    this.http.get('/trip/'+id).subscribe(data => {
      this.trip = data;
    });
  }

  deleteTrip(id) {
  this.http.delete('/trip/'+id)
    .subscribe(res => {
        this.router.navigate(['/trips']);
      }, (err) => {
        console.log(err);
      }
    );
  }

  returnToMain(id) {
    this.router.navigate(['/trips']);
  }
}