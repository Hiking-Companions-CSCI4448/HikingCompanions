import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TripComponent } from './trip/trip.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { TripDetailComponent } from './trip-detail/trip-detail.component';

const appRoutes: Routes = [
  {
    path: 'trips',
    component: TripComponent,
    data: { title: 'Trip List' }
  },
  { path: '',
    redirectTo: '/trips',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    TripDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
    	appRoutes,
    	{ enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
