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
interface EmpresaData {
  EName: string;
  NIF: string;
  Municipi: string;
  Adreca: string;
  Email: string;
  TPublic: string;
  TPrivat: string;
  Categories: string;
  Web: string;
  Treballadors: number;
  Horari: string;
  Times: string;
  Code: string;
}

@Component({
  selector: 'app-eregister',
  templateUrl: './eregister.page.html',
  styleUrls: ['./eregister.page.scss'],
})
export class EregisterPage implements OnInit {

  userList = [];
  userData: UserData;
  userForm: FormGroup;

  EmpresaList = [];
  EmpresaData: EmpresaData;
  EmpresaForm: FormGroup;

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
    });
    this.EmpresaForm = this.fb.group({
      
    })
  }
  redirectRUser() {
    this.router.navigate([])
  }
  CreateRecordEmpresa() {
    try{
    this.authSvc.register(this.userForm.controls.Email.value, this.userForm.controls.Password.value);
    this.firebaseService.create_user(this.userForm.value)}
    catch(error) {
        console.log(error);
      }
  }  
} 