import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TripEditComponent implements OnInit {

  trip = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTrip(this.route.snapshot.params['id']);
  }

  getTrip(id) {
    this.http.get('/trip/'+id).subscribe(data => {
      this.trip = data;
    });
  }

  updateTrip(id, data) {
    this.http.put('/trip/'+id, data)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/trip-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}