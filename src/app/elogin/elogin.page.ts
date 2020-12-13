import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-elogin',
  templateUrl: './elogin.page.html',
  styleUrls: ['./elogin.page.scss'],
})
export class EloginPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router, private location: Location) { }

  ngOnInit() {
  }
  async onLogin(email, password) {
    try{
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified)
      }
    } catch(error) {
      console.log('Error->', error);
    }
  }

  async redirRegistre(){
    this.redirectRegistre();
  }

  private redirectUser(isVerified:boolean){
    if(isVerified){
      this.router.navigate(['ehome'])
    } else {
      this.router.navigate(['verificar'])
    }
  }
  private redirectRegistre(){
    this.router.navigate(['eregister'])
  }
  backClicked() {
    this.location.back();
  }

}
