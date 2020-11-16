import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stopovers-list',
  templateUrl: './stopovers-list.page.html',
  styleUrls: ['./stopovers-list.page.scss'],
})
export class StopoversListPage implements OnInit {

  locations = [
    {
      'id' : '1',
      'loc' : 'Home',
      'city' : ''
    },
    {
      'id' : '2',
      'loc' : 'Gallops',
      'city' : 'Ahmedabad'
    },
    {
      'id' : '3',
      'loc' : 'IDK',
      'city' : 'Surat'
    },
    {
      'id' : '4',
      'loc' : 'Mumbai',
      'city' : ''
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToBookingSlider(){
    this.router.navigate(['/booking-slider']);
  }

}
