import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  seg_id = 1;
  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  changeSegment(val) {
    this.seg_id = val;
  }

  goToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  goToPreferences() {
    this.router.navigate(['/preferences']);
  }

  goToAddCar() {
    this.router.navigate(['/add-car']);
  }

  goToVerification() {
    this.router.navigate(['/id-verify']);
  }

  goTopublicProfile() {
    this.router.navigate(['user-profile']);
  }
  onLogout() {
    // welcome
    this.navCtrl.navigateRoot('welcome');
  }
}
