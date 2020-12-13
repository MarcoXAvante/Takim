import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

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

  townList = [];
  userList = [];
  userData: UserData;
  userForm: FormGroup;

  constructor(
    private firestore: AngularFirestore,
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
    this.firestore.collection('municipis').snapshotChanges().subscribe(data => {
      this.townList = data.map(e => {
        return {
          Nom: e.payload.doc.data()['Nom'],
          Comarca: e.payload.doc.data()['Comarca'],
        }
      })
      this.townList.sort((a,b) => a.Nom.localeCompare(b.Nom));
      console.log(this.townList);
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
