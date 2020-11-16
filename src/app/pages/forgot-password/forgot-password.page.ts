import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  send_mail : boolean = false;
  verify_otp : boolean = false;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  sendMail(){
    this.send_mail = true;
  }

  verifyOtp(){
    this.verify_otp = true;
  }

  ChangePassword(){
    this.router.navigate(['/welcome']);
  }

  goToLogin(){
    this.router.navigate(['/welcome']);
  }

}
