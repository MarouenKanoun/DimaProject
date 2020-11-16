import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCarInfo() {
    this.router.navigate(['/car-info']);
  }
  Skip() {

  }
}
