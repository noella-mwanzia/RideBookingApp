import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'ride-booking-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  logInForm!: FormGroup;

  constructor(  private _fb: FormBuilder ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm()
  {
    this.logInForm = this._fb.group({
      "email": ['',[Validators.required]],
      "password": ['', Validators.required]
    })
  }

  login()
  {
    // const email = this.logInForm.controls['email'].value;
    // const password = this.logInForm.controls['password'].value;

    // this._authService.loginWithEmailAndPassword(email,password)
    //                   .then((res) => this._router.navigate['/home'])
    //                   .catch((err) => console.log(err))
  }
}
