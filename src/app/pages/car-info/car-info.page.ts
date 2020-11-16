import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.page.html',
  styleUrls: ['./car-info.page.scss'],
})
export class CarInfoPage implements OnInit {

  car_company = ['Maruti', 'Hyundai', 'Honda', 'Ford', 'TATA'];
  dummy_company = ['Maruti', 'Hyundai', 'Honda', 'Ford', 'TATA']
  car_type = ['Hatchback', 'Sedan', 'Convertible', 'Estate', 'SUV', 'Station Wagon'];
  dummy_type = ['Hatchback', 'Sedan', 'Convertible', 'Estate', 'SUV', 'Station Wagon'];
  company;
  type;
  constructor() { }

  ngOnInit() {

  }

  onSearchCompany(eve) {

    console.log(eve.srcElement.value);

    if (this.company == '') {
      this.car_company = [];
      return;
    }
    this.car_company = this.dummy_company.filter((item) => {
      console.log(item);
      var itemData = item.toLowerCase();
      var textData = eve.srcElement.value.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
  }

  onSearchModel(eve) {

    if (this.type == '') {
      this.car_type = [];
      return;
    }
    this.car_type = this.dummy_type.filter(item => {
      const itemData = item ? item.toUpperCase() : ''.toUpperCase();
      const textData = eve.srcElement.value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
  }

  selectCompany(val) {
    this.company = val;
    this.car_company = [];
  }

  selectType(val) {
    this.type = val;
    this.car_type = []
  }
  onClick() {

  }
}
