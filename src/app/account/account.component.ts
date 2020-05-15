import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Account } from '../models';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
// codes below are modified from the [material.angular.io]([link](https://material.angular.io/components/form-field/overview))
//for more information, please refers to the readme file
export class AccountComponent implements OnInit {
  signin: FormGroup;  
  login = false;
  account: Account;
  result;
  email="";
  constructor(private formBuilder: FormBuilder, private Auth:AuthService, private router: Router) {
    this.Auth.printToConsole("Auth service success");
  }
  
  ngOnInit() {
    this.signin = this.formBuilder.group({
      emailSignin: ['', [Validators.required,  Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      pwSignin: ['',  [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}/), Validators.minLength(6)]]
    });
    
  }

  getPwErrorMessage() {
    return this.signin.controls['pwSignin'].hasError('required') ? 'You must set a valid passward' :
            this.signin.controls['pwSignin'].hasError('pattern') ? 'Not a valid password.' :
            '';
  }

  getEmailErrorMessage() {
    return this.signin.controls['emailSignin'].hasError('required') ? 'You must enter email address' :
    this.signin.controls['emailSignin'].hasError('pattern') ? 'Not a valid email' :
            '';
  }

  submitForm(){
    if(this.signin.invalid){
      return;
    }
    else{
      this.account = new Account(
        null,
        null,
        this.signin.get("emailSignin").value,
        this.signin.get("pwSignin").value,
      );
      var email = this.signin.get("emailSignin").value;
      var pass = this.signin.get("pwSignin").value;
      // console.log(email, pass);
      this.result = this.Auth.login(this.account).subscribe(res=>{console.log(res);this.login=true;});
      if(this.login){
        this.router.navigate(['/']);
      }
      
    }

  
  }
}
