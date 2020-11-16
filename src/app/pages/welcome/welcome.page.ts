import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {

  AlertController,
  MenuController,
  NavController,
  ToastController,

} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  authForm = { email: "", password: "" };

  constructor(
    private service: AuthService,
    public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    private router: Router
  )
{

}

  ngOnInit() {
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

  goToForgot(){
    this.router.navigate(['/forgot-password']);
  }

  goToRides(){
    this.router.navigate(['/tabs'])
  }

  login() {
    let postData = {
      email: this.authForm.email,
      password: this.authForm.password,
    };

    if (this.authForm.email != "" && this.authForm.password != "") {
      this.service.login(postData).subscribe((data: any) => {
       console.log(data)
        if (data.code == 200) {
          localStorage.setItem('token', data.token);
          // const toast = this.toastCtrl.create({
          //   message: data.message,
          //   duration: 3000,
          // });
          // toast.present();
          this.router.navigate(['/home'])
        } else if (data.code == 401) {
          console.log(data.message);
          // const toast = this.toastCtrl.create({
          //   message: data.message,
          //   duration: 3000,
          // });
          // toast.present();
        }
      });
    } else {
      // console.log("vide");
      // const toast = this.toastCtrl.create({
      //   message:'vide',
      //   duration: 3000,
      // });
      // toast.present();
    }
  }

}
