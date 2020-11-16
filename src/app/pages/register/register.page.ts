import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from './services/auth.service';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

 isCustumer = true;
 hide:boolean =true;

 RegisterForm = { username:"" ,email: "", password: "" ,confirm_password:"",adresse:"",name:""};

  constructor(

      private service: AuthService,
      private router:Router,
    // public nav: NavController,
    // public forgotCtrl: AlertController,
    // public menu: MenuController,
    // public toastCtrl: ToastController
  ) 
  {
    // this.menu.swipeEnable(false);
  }
  ngOnInit() {
  }

  goToLogin(){
    this.router.navigate(['/welcome'])
  }

  goToRides(){
    this.router.navigate(['your-rides'])
  }

    goToHome(){
    this.router.navigate(['home'])
  }


    ngIfCtrl(){
    this.hide = !this.hide;
}

  onMyBooleanChange() {
if(this.isCustumer==true)
{
  this.hide = true
}
else if(this.isCustumer==false)
{
  this.hide = false
}
}

 register()
  {
    if(this.isCustumer==false)
    {
    console.log("je suis un client ")
    this.RegiterAsClient();
    }
    else if(this.isCustumer==true)
    {
    console.log("je suis une station de service")
     this.registerAsStation();
    }
  }

  RegiterAsClient()
  {

    let postData = {
      username:this.RegisterForm.username,
      email: this.RegisterForm.email,
      password: this.RegisterForm.password,
      confirm_password:this.RegisterForm.confirm_password,
    };

    if (this.RegisterForm.email != "" && this.RegisterForm.password != "" &&  this.RegisterForm.username != "" && this.RegisterForm.confirm_password != "" && this.RegisterForm.confirm_password==this.RegisterForm.password) {
      this.service.Register(postData).subscribe((data: any) => {
     console.log(data.role)
     console.log(data.id)

     if (data.role != "")
     {
       console.log("ok")
       const toast = this.toastCtrl.create({
         message: data.message,
         duration: 3000,
       });

       toast.present();
       this.nav.setRoot(HomePage);
     }
      else if (data.role ="undefined") {
       console.log("not ok")
       const toast = this.toastCtrl.create({
         message: data.message,
         duration: 3000,
       });
       toast.present();
     }
   });
 } else {
   console.log("vide");
   const toast = this.toastCtrl.create({
     message:'champs vide ou mots de passe differents ',
     duration: 3000,
   });
   toast.present();
 }
  }

  //RegisterAsStaion
  registerAsStation() {

    let postData = {


      adresse:this.RegisterForm.adresse,
      name:this.RegisterForm.name,

      user : {
        username:this.RegisterForm.username,
        email: this.RegisterForm.email,
        password: this.RegisterForm.password,
        confirm_password:this.RegisterForm.confirm_password,
      },
    };


console.log(postData)


    if (this.RegisterForm.email != "" && this.RegisterForm.password != "" &&  this.RegisterForm.username != "" && this.RegisterForm.confirm_password != "" && this.RegisterForm.confirm_password==this.RegisterForm.password) {
         this.service.RegisterStation(postData).subscribe((data: any) => {
        console.log(postData)

        console.log(data)

        if (data.role != "")
        {
          console.log("ok")
          const toast = this.toastCtrl.create({
            message: data.message,
            duration: 3000,
          });

          toast.present();
          this.nav.setRoot(HomePage);
        }
         else if (data.role ==empty) {
          console.log("not ok")
          const toast = this.toastCtrl.create({
            message: data.message,
            duration: 3000,
          });
          toast.present();
        }
      });
    } else {
      console.log("vide");
      const toast = this.toastCtrl.create({
        message:'champs vide ou mots de passe differents ',
        duration: 3000,
      });
      toast.present();
    }

  }

}
