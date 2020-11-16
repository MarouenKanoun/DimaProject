import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-your-rides',
  templateUrl: './your-rides.page.html',
  styleUrls: ['./your-rides.page.scss'],
})
export class YourRidesPage implements OnInit {

  seg_id = 1;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  segmentChange(val) {
    this.seg_id = val;
  }

  goToOfferRides() {
    this.router.navigate(['/offer-rides']);
  }

  goToFindRides() {
    this.router.navigate(['/find-rides']);
  }

  goToDetail(ids) {
    const navData: NavigationExtras = {
      queryParams: {
        id: ids
      }
    };
    this.router.navigate(['/history-detail'], navData);
  }

}
