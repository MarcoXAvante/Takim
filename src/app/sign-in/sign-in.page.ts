import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

interface UserData {
  Name: string;
  Surname: string;
  Gender: string;
  Birthdate: Date;
  Hometown: string;
  Email: string;
  Password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  userList = [];
  userData: UserData;
  userForm: FormGroup;

  constructor(
    private authSvc: AuthService,
    private firebaseService: FirebaseService,
    private router:Router,
    public fb: FormBuilder
    ) {
      this.userData = {} as UserData;
    }

  ngOnInit() {
    this.userForm = this.fb.group({
      Name: ['', [Validators.required]],
      Surname: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      Birthdate: ['', [Validators.required]],
      Hometown: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    })
  }
  redirectRUser() {
    this.router.navigate([])
  }
  CreateRecord() {
    try{
    this.authSvc.register(this.userForm.controls.Email.value, this.userForm.controls.Password.value);
    this.firebaseService.create_user(this.userForm.value)}
    catch(error) {
        console.log(error);
      }
  }  
} 
