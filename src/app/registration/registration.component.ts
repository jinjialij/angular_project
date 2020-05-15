import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Account } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
// codes below are modified from the [material.angular.io]([link](https://material.angular.io/components/form-field/overview))
//for more information, please refers to the readme file
export class RegistrationComponent implements OnInit {
  register: FormGroup;
  account: Account;
  registered = false;
  result;
  constructor(
    private formBuilder: FormBuilder, 
    private Auth:AuthService, 
    private router: Router) {}
  

  ngOnInit() {
    this.register = this.formBuilder.group({
      fn: ['', Validators.required],
      ln: ['', Validators.required],
      email: ['', [Validators.required,  Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      pw: ['',  [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}/), Validators.minLength(6)]]
    });
  }

  getPwErrorMessage() {
    return this.register.controls['pw'].hasError('required') ? 'You must set a valid passward' :
            this.register.controls['pw'].hasError('pattern') ? 'Not a valid password.' :
            '';
  }

  getEmailErrorMessage() {
    return this.register.controls['email'].hasError('required') ? 'You must enter email address' :
    this.register.controls['email'].hasError('pattern') ? 'Not a valid email' :
            '';
  }

  getfnErrorMessage() {
    return this.register.controls['fn'].hasError('required') ? 'You must enter a value' : '';
  }

  getlnErrorMessage() {
    return this.register.controls['ln'].hasError('required') ? 'You must enter a value' : '';
  }

  //post to database to insert new account
  submitForm(){     
      if(this.register.invalid){
        return;
      }
      else{
        this.account = new Account(
          this.register.get("fn").value,
          this.register.get("ln").value,
          this.register.get("pw").value,
          this.register.get("email").value
        );
        this.result = this.Auth.register(this.account).subscribe(
          res=>{console.log(res);
            });
        this.registered=true;
        if(this.registered){
          this.router.navigate(['/login']);
        }        
      }
  }
}
