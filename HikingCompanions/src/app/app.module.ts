import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TripComponent } from './trip/trip.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { TripCreateComponent } from './trip-create/trip-create.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';

const appRoutes: Routes = [
  {
    path: 'trips',
    component: TripComponent,
    data: { title: 'Trip List' }
  },
  {
    path: 'trip-details/:id',
    component: TripDetailComponent,
    data: { title: 'Trip Details' }
  },
  {
    path: 'trip-create',
    component: TripCreateComponent,
    data: { title: 'Create Trip' }
  },
  {
    path: 'trip-edit/:id',
    component: TripEditComponent,
    data: { title: 'Edit Trip' }
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
    TripDetailComponent,
    TripCreateComponent,
    TripEditComponent,
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
