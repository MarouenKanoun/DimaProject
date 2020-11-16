import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import * as moment from 'moment';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-slider',
  templateUrl: './booking-slider.page.html',
  styleUrls: ['./booking-slider.page.scss'],
})
export class BookingSliderPage implements OnInit {

  @ViewChild(CalendarComponent, { static: false }) myCal: CalendarComponent;
  @ViewChild('mySlider', { static: false }) slider: IonSlides;

  @ViewChild('testSlider', { static: false }) slider1: ElementRef;

  slideOpts = {
    slidesPerView: 1,
    allowTouchMove: false
  }

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  lbl_visible = false;

  currnetMonth;
  date;
  my_date;
  todayDate;
  id = 1;
  no_seat = 3;
  p_btn_dis = false;
  m_btn_dis = false;
  template: any;
  constructor(private route: Router) {
    this.todayDate = moment();
  }

  ngOnInit() {
    this.currnetMonth = this.getDate(new Date());

    console.log(this.currnetMonth);
  }

  getDate(date) {
    var d = new Date(date);
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
    var c = monthNames[d.getMonth()];
    return c;
  }

  onCurrentDateChanged(ents) {
    this.currnetMonth = this.getDate(ents);
    console.log("====", this.currnetMonth);
  }

  back() {
    this.date = this.todayDate.subtract(1, 'days').toDate();
    this.my_date = moment(this.date).format('ddd, Do MMMM')
    var swiper = document.querySelector('.swiper-container')['swiper'];
    var date = moment().add('-1', 'M').toLocaleString();
    this.currnetMonth = this.getDate(date);
    swiper.slidePrev();
  }

  next() {
    this.date = this.todayDate.add(1, 'days').toDate();
    this.my_date = moment(this.date).format('ddd, Do MMMM');
    var swiper = document.querySelector('.swiper-container')['swiper'];

    console.log(swiper)
    swiper.slideNext();
  }

  onClick(val) {
    console.log(val);
    this.id = val;
  }

  onslide2() {
    this.slider.slideNext();
    this.id = this.id + 1
  }

  plus() {
    this.m_btn_dis = false;
    if (this.no_seat <= 3) {
      this.no_seat = this.no_seat + 1;
    }
    else if (this.no_seat == 4) {
      this.p_btn_dis = true;
    }
  }

  minus() {
    this.p_btn_dis = false;
    if (this.no_seat >= 2) {
      this.no_seat = this.no_seat - 1;
    }
    else if (this.no_seat == 1) {
      this.m_btn_dis = true;
    }
  }

  goToHome() {
    this.route.navigate(['/payments']);
  }
  dont_agree() {

  }

}
