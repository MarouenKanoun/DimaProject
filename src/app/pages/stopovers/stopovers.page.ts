import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stopovers',
  templateUrl: './stopovers.page.html',
  styleUrls: ['./stopovers.page.scss'],
})
export class StopoversPage implements OnInit {

  stopovers = ['Nari Chowkdi, Bhannagar', 'Hotel Gallord, Sihor', 'Hotel Gallops, Ahmedabad'];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToStopoversList(){
    this.router.navigate(['/stopovers-list']);
  }

}
