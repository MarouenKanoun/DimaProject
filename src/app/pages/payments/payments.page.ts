import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  id;
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }
  changeMethod(val) {
    this.id = val;
  }
  paid() {
    this.route.navigate(['/tabs']);
  }
}
