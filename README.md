<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->

# Angular project

* *Date Created*: 1 Nov 2019
* *Last Modification Date*: 16 Nov 2019

## Authors

* [Jiali Jin](jl548339@dal.ca) 

## Deployment
<!-- Bluenose url -->
[https://web.cs.dal.ca/~jiali/csci3172/A3/a3](https://web.cs.dal.ca/~jiali/csci3172/A3/a3)

The backend doesn't work online. Please install locally to test the backend.
[There is a video showing the backend functions.](https://drive.google.com/open?id=1ibd0vq8Ml7fwVCxAvGKQGAXjQtu7Xo3U)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Angular](https://angular.io/) - The web framework used
* [Boostrap4](https://getbootstrap.com/) - The front-end framework used
* [Node.js](https://nodejs.org/en/)

Angular is used as required. Bootstrap4 is used because it can arrange css better.

## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### Account and Registriation ts and html files

*Lines 9 - 35 in account.component.ts*
*Lines 13 - 33 in account.component.html*
*Line 14 - 42 in registriation.component.html*
*Line 9 - 46 in registriation.component.ts*

```
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
}

<form class="createAccount" [formGroup]="register" (submit)="submitForm()" novalidate>
    <mat-form-field>
        <input matInput placeholder="First name" name="fn" [(ngModel)]="fn" formControlName="fn" class="form-control">
        <mat-error *ngIf="register.controls['fn'].invalid">{{getfnErrorMessage()}}</mat-error>
    </mat-form-field>

    <mat-form-field>
        <input matInput placeholder="Last name" name="ln" [(ngModel)]="ln" formControlName="ln" class="form-control">
        <mat-error *ngIf="register.controls['ln'].invalid">{{getlnErrorMessage()}}</mat-error>
    </mat-form-field>

    <mat-form-field>
        <input matInput placeholder="Email Address" name="email" [(ngModel)]="email" formControlName="email" class="form-control">
        <mat-error *ngIf="register.controls['email'].invalid">{{getEmailErrorMessage()}}</mat-error>
    </mat-form-field>

    <mat-form-field>
        <input matInput placeholder="Password" [type]="hide ? 'password' : 'text'" name="pw" [(ngModel)]="pw" formControlName="pw" class="form-control">
        <mat-error *ngIf="register.controls['pw'].invalid">{{getPwErrorMessage()}}</mat-error>
        <mat-error *ngIf="register.controls['pw'].invalid && register.controls['pw'].dirty || register.controls['pw'].touched">
            A valid password should contain at least one number, one capital letter and be at least 6 characters long
        </mat-error>
        <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" type="button" [attr.aria-pressed]="hide">
            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
        </button>
    </mat-form-field>

    <button mat-raised-button color="primary" class="mt-5" submit [disabled]="!register.valid">Create Account</button>
</form>
```

The code above was created by adapting the code in [material.angular.io]([link](https://material.angular.io/components/form-field/overview)) as shown below:

```
export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
<div class="example-container">
  <mat-form-field>
    <input matInput placeholder="Enter your email" [formControl]="email" required>
    <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>
  </mat-form-field>
</div>


<div class="example-container">
  <mat-form-field>
    <input matInput placeholder="Enter your password" [type]="hide ? 'password' : 'text'">
    <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
    </button>
  </mat-form-field>
</div>
```

- <!---How---> The code in [material.angular.io]([link](https://material.angular.io/components/form-field/overview)) was implemented by Angular team
- <!---Why---> [material.angular.io]([link](https://material.angular.io/components/form-field/overview))'s Code was used because I need to validate the form inputs. In the website, it asks user to input email address and password to sign in, while it also require firstname and lastname to register an account. In order to help user understand the requirement of sign in and registriation, I need the form validate to check if the form has been filled correctly. Besides, I need to show feedbacks to users so that they can get rid of errors when sign in or register an account.
- <!---How---> [material.angular.io]([link](https://material.angular.io/components/form-field/overview))'s Code was modified by Jiali. I add five fields in the form. I want to validate them. I want to ensure that user input values for names. I also want to ensure the email and password are with valid patterns. Therefore, I make four methods to check every field.

### Account and Registriation ts files

*Lines 11 - 37 in account.component.ts*
*Line 11 - 47 in registriation.component.ts*

```
export class AccountComponent implements OnInit {
  signin: FormGroup;

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
      console.log(this.signin.value);
  }

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.signin = this.formBuilder.group({
      emailSignin: ['', [Validators.required,  Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      pwSignin: ['',  [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}/), Validators.minLength(6)]]
    });
  }

<form class="createAccount" [formGroup]="register" (submit)="submitForm()" novalidate>
    <mat-form-field>
        <input matInput placeholder="First name" name="fn" [(ngModel)]="fn" formControlName="fn" class="form-control">
        <mat-error *ngIf="register.controls['fn'].invalid">{{getfnErrorMessage()}}</mat-error>
    </mat-form-field>

    <mat-form-field>
        <input matInput placeholder="Last name" name="ln" [(ngModel)]="ln" formControlName="ln" class="form-control">
        <mat-error *ngIf="register.controls['ln'].invalid">{{getlnErrorMessage()}}</mat-error>
    </mat-form-field>

    <mat-form-field>
        <input matInput placeholder="Email Address" name="email" [(ngModel)]="email" formControlName="email" class="form-control">
        <mat-error *ngIf="register.controls['email'].invalid">{{getEmailErrorMessage()}}</mat-error>
    </mat-form-field>

    <mat-form-field>
        <input matInput placeholder="Password" [type]="hide ? 'password' : 'text'" name="pw" [(ngModel)]="pw" formControlName="pw" class="form-control">
        <mat-error *ngIf="register.controls['pw'].invalid">{{getPwErrorMessage()}}</mat-error>
        <mat-error *ngIf="register.controls['pw'].invalid && register.controls['pw'].dirty || register.controls['pw'].touched">
            A valid password should contain at least one number, one capital letter and be at least 6 characters long
        </mat-error>
        <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" type="button" [attr.aria-pressed]="hide">
            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
        </button>
    </mat-form-field>

    <button mat-raised-button color="primary" class="mt-5" submit [disabled]="!register.valid">Create Account</button>
</form>
```

The code above was created by adapting the code in [CSCI3172 lab10]([link](https://dal.brightspace.com/d2l/le/content/100128/viewContent/1494198/View)) as shown below:

```
<div style="text-align:center">
  <h1>
    Welcome to {{title}}!!
  </h1>
  <form [formGroup]="validationLabForm" (submit)="submitForm()" novalidate>
    <div class="form-group">
      <label class="center-black">Grade:
        <input class="form-control" name="grade" [(ngModel)]="grade" formControlName="grade">
      </label>
    </div>
    <div *ngIf="validationLabForm.controls['grade'].invalid && (validationLabForm.controls['grade'].dirty || validationLabForm.controls['grade'].touched">
      <div *ngIf="validationLabForm.controls['grade'].errors.required">
        Grade is required.
      </div>
    </div><br>

    <button submit>submit</button>
  </form>
  <p>{{grader}}</p>
</div>

export class AppComponent {
  // title = 'angularValidationLab';
  title = 'Grade';
  graderesult;
  grader;
  grade = "";
  validationLabForm: FormGroup;
  constructor(private fb: FormBuilder, private gs: GradeService){
    this.createForm();
  }

  createForm(){
    this.validationLabForm = this.fb.group({
      grade: ['', Validators.required]
    });
  }
  submitForm(){
    this.graderesult = this.gs.getGrade(this.grade).subscribe(res => {
      console.log(res);
      this.grader = res["grade"];
    });
  }
}
```

- <!---How---> The code in [CSCI3172 lab10]([link](https://dal.brightspace.com/d2l/le/content/100128/viewContent/1494198/View)) was implemented by CSCI3172 TAs
- <!---Why---> [CSCI3172 lab10]([link](https://dal.brightspace.com/d2l/le/content/100128/viewContent/1494198/View))'s Code was used because I need to validate the form inputs. In the website, it asks user to input email address and password to sign in, while it also require firstname and lastname to register an account. In order to help user understand the requirement of sign in and registriation, I need the form validate to check if the form has been filled correctly. Besides, I need to show feedbacks to users so that they can get rid of errors when sign in or register an account.
- <!---How---> [CSCI3172 lab10]([link](https://dal.brightspace.com/d2l/le/content/100128/viewContent/1494198/View))'s Code was modified by Jiali. I add five fields in the form. I want to validate them. In the ts file, I initialize firstname, lastname, password, email address as a form group. It allows me to manage parameters easier. I also uses validate.pattern to validate with regex expression. It enables more accurate validations. I modied codes to customized them for my website.


### Account and Registriation ts

*Lines 34 in account.component.ts*
*Line 24 in registriation.component.ts*

```
email: ['', [Validators.required,  Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
```

The code above was created by adapting the code in [rnevius]([link](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)) as shown below: 

```
var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
```

- <!---How---> The code in [rnevius]([link](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)) was implemented by Angular
- <!---Why---> [rnevius]([link](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript))'s Code was used because I need more accurate emaill validator using Regex expression.
- <!---How---> [rnevius]([link](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript))'s Code was modified by Jiali. I used it in the validator.pattern so that the email field can check if the user's email address is valid.

### footer.component.html

*Lines 19 - 24*

```
<mat-toolbar class="footerList">
    <mat-toolbar-row>
        <h5>Customer Support</h5>
    </mat-toolbar-row>
    
    <mat-toolbar-row>
        <h5>Service</h5>
    </mat-toolbar-row>
    
    <mat-toolbar-row>
        <h5>About Us</h5>
    </mat-toolbar-row>
</mat-toolbar>
```

The code above was created by adapting the code in [Angular.Material]([link](https://material.angular.io/components/toolbar/examples)) as shown below:

```
<mat-toolbar color="primary">
  <mat-toolbar-row>
    <span>Custom Toolbar</span>
  </mat-toolbar-row>

  <mat-toolbar-row>
    <span>Second Line</span>
    <span class="example-spacer"></span>
    <mat-icon class="example-icon" aria-hidden="false" aria-label="Example user verified icon">verified_user</mat-icon>
  </mat-toolbar-row>

  <mat-toolbar-row>
    <span>Third Line</span>
    <span class="example-spacer"></span>
    <mat-icon class="example-icon" aria-hidden="false" aria-label="Example heart icon">favorite</mat-icon>
    <mat-icon class="example-icon" aria-hidden="false" aria-label="Example delete icon">delete</mat-icon>
  </mat-toolbar-row>
</mat-toolbar>
```

- <!---How---> The code in [Angular.Material]([link](https://material.angular.io/components/toolbar/examples)) was implemented by Angular
- <!---Why---> [Angular.Material]([link](https://material.angular.io/components/toolbar/examples))'s Code was used because I want to implement a better design for smaller viewpoint so that the website could be responsive. I would like to follow the design patter of Angular. This code 
- <!---How---> [Angular.Material]([link](https://material.angular.io/components/toolbar/examples))'s Code was modified by Jiali. I only takes three rows and delete icons as I don't need them. I want to keep the footer simple.

### header.component.html

*Lines 27 - 51*

```
<div class="sideIconNav">
    <button mat-icon-button [matMenuTriggerFor]="iconMenu" aria-label="iconMenu">
        <mat-icon>more_vert</mat-icon>
    </button>
    <mat-menu #iconMenu="matMenu">
        <button mat-menu-item>
            <a routerLink="/">
                <mat-icon class="iconInMenu">stores</mat-icon>
                <span class="iconInMenuLabel">Stroes</span>
            </a>
        </button>
        
        <button mat-menu-item>
            <a routerLink="/login">
                <mat-icon class="iconInMenu">account_circle</mat-icon>
                <span class="iconInMenuLabel">Account</span>
            </a>  
        </button>
            
        <button mat-menu-item>
                <mat-icon class="iconInMenu">shopping_cart</mat-icon>
                <span class="iconInMenuLabel">Cart</span>
        </button>
    </mat-menu>
</div>
```

The code above was created by adapting the code in [Angular.Material]([link](https://material.angular.io/components/menu/examples)) as shown below:

```
<button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
  <mat-icon>more_vert</mat-icon>
</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>
    <mat-icon>dialpad</mat-icon>
    <span>Redial</span>
  </button>
  <button mat-menu-item disabled>
    <mat-icon>voicemail</mat-icon>
    <span>Check voice mail</span>
  </button>
  <button mat-menu-item>
    <mat-icon>notifications_off</mat-icon>
    <span>Disable alerts</span>
  </button>
</mat-menu>
```

- <!---How---> The code in [Angular.Material]([link](https://material.angular.io/components/menu/examples)) was implemented by Angular
- <!---Why---> [Angular.Material]([link](https://material.angular.io/components/menu/examples))'s Code was used because the website needs a smaller quick nav button in small viewpoint. Besides, I want to follow the mobile design pattern. Therefore, I follow this pattern in the website.
- <!---How---> [Angular.Material]([link](https://material.angular.io/components/menu/examples))'s Code was modified by Jiali. I use the Menu with icons to allow user to access strore, account, and cart when they want to go to those pages. I also add a tag and routerLink so that user could use this menu to navigatie the website.

*Lines 4 - 10*

```
<mat-form-field class="searchBar">
    <input matInput placeholder="Search" type="search" [(ngModel)]="value">
    <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''" type="button">
        <mat-icon>close</mat-icon>
    </button>
    <mat-icon>search icon</mat-icon>
</mat-form-field>
```

The code above was created by adapting the code in [Angular.Material]([link](https://material.angular.io/components/input/examples)) as shown below:

```
<mat-form-field class="example-form-field">
  <input matInput type="text" placeholder="Clearable input" [(ngModel)]="value">
  <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''">
    <mat-icon>close</mat-icon>
  </button>
</mat-form-field>
```

- <!---How---> The code in [Angular.Material]([link](https://material.angular.io/components/input/examples)) was implemented by Angular.
- <!---Why---> [Angular.Material]([link](https://material.angular.io/components/input/examples))'s Code was used because I think it is a useful function when searching things. User could clear the input field easily so that they can use the search bar more effectively.
- <!---How---> [Angular.Material]([link](https://material.angular.io/components/input/examples))'s Code was modified by Jiali. I use the code and modified it so that it has the search as the place holder and has a search icon after it. I also use css to avoid the clear icon and the search icon to overlap with each other.

### Landingpage.component.html

*Lines 1 - 10*

```
<mat-sidenav-container (backdropClick)="close()">
    <mat-sidenav #sidenav position="end" [(opened)]="opened" class="sidnavpanel" (keydown.escape)="close()">
        <div class="list-group list-group-flush">
            <a href="#offers"><button mat-button (click)="close()">More unmissable offers</button></a>
            <a href="#popProd"><button mat-button (click)="close()">Popular products</button></a>
        </div>
    </mat-sidenav>
    <mat-sidenav-content>
    ....
    </mat-sidenav-content>
</mat-sidenav-container>

export class LandingpageComponent implements OnInit {

  @ViewChild('sidenav',{static:false}) sidenav: MatSidenav;

  close() {
    this.sidenav.close();
  }
  constructor() { }

  ngOnInit() {
  }

}
```

The code above was created by adapting the code in [Angular.Material](https://material.angular.io/components/sidenav/overview) as shown below:

```
//Sidenav with custom escape and backdrop click behavior
<mat-sidenav-container
    class="example-container" (backdropClick)="close('backdrop')" *ngIf="shouldRun">
  <mat-sidenav #sidenav (keydown.escape)="close('escape')" disableClose>
    <p><button mat-button (click)="close('toggle button')">Toggle</button></p>
  </mat-sidenav>

  <mat-sidenav-content>
    <p><button mat-button (click)="sidenav.open()">Open</button></p>
    <p>Closed due to: {{reason}}</p>
  </mat-sidenav-content>
</mat-sidenav-container>

export class SidenavDisableCloseExample {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
```

- <!---How---> The code in [Angular.Material](https://material.angular.io/components/sidenav/overview) was implemented by Angular
- <!---Why---> [Angular.Material](https://material.angular.io/components/sidenav/overview)'s Code was used because I need a side nav bar so that user could access the long landing page easily. The website provides such function on large viewpoint. To use Angular material and to customize behavior, I need to use featured JavaScript codes in Angular. Therefore, I use some part of this code so that the side nav button and keyboard can act as expected.
- <!---How---> [Angular.Material](https://material.angular.io/components/sidenav/overview)'s Code was modified by Jiali. I remove unnecessary texts and add a list of links which can access each part of the web page easily. In the end, the side nav is triggered by a menu button and closed by esc keyboard button or backup click.

### Landingpage.component.html

*Lines 40 - 141*

```
<div class="card-deck">
    <div class="card">
        <img src="assets/image/product4.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">HP 15.6" Laptop - Black (AMD A6-9225 Processor/1TB HDD/8GB RAM/Windows 10) - English</h5>
            <p class="card-text rating">
                <span>3.41</span>
                <mat-icon class="checked">star</mat-icon> 
                <mat-icon class="checked">star</mat-icon> 
                <mat-icon class="checked">star</mat-icon> 
                <mat-icon>star_border</mat-icon> 
                <mat-icon>star_border</mat-icon>
            </p>
            <p class="card-text"><a routerLink="/product" class="btn btn-primary">Shop now</a></p>
        </div>
    </div>
    ...
</div>
```

The code above was created by adapting the code in [Bootstrap4](https://getbootstrap.com/docs/4.3/components/card/#card-decks) as shown below:

```
<div class="card-deck">
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  ...
</div>
```

- <!---How---> The code in [Bootstrap4](https://getbootstrap.com/docs/4.3/components/card/#card-decks) was implemented by Bootstrap
- <!---Why---> [Bootstrap4](https://getbootstrap.com/docs/4.3/components/card/#card-decks)'s Code was used because I need to organize the landingpage with multiple products. By using card deck, each product are aligned to each other. It helps the page to follow the C.R.A.P. design.
- <!---How---> [Bootstrap4](https://getbootstrap.com/docs/4.3/components/card/#card-decks)'s Code was modified by Jiali. I remove unnecessary labels and texts. I add buttons so that user can directly go to the product page. I also use Angular material to implement the rating part so that user can recieve more information.
  
### productpage.component.html

*Lines 75 - 224*

```
<mat-tab label="More Information">
    <ul>
        <li>7th generation AMD A6-9225 processor and 8GB of DDR4-SDRAM for high performance and smooth operation at premium speed</li>
        <li>1 TB hard drive with 5400rpm provides enough space to store your data, movies, music, and photos</li>
        <li>15.6'' diagonal HD SVA BrightView WLED-backlit screen with a 1366 x 768 resolution lets you enjoy vivid colours and crystal-clear view</li>
    </ul>
</mat-tab>
<mat-tab label="What's Included">
    <ul>
        <li>HP Laptop 15-Db0108Ca</li>
        <li>3-Cell 41 Whr Polymer/Prismatic Mix Battery</li>
        <li>45W AC Adapter</li>
    </ul>
</mat-tab>
```

The code above was created by adapting the code in [Angular.Material](https://material.angular.io/components/tabs/overview) as shown below:

```
<mat-tab-group animationDuration="0ms">
  <mat-tab label="First">Content 1</mat-tab>
  <mat-tab label="Second">Content 2</mat-tab>
  <mat-tab label="Third">Content 3</mat-tab>
</mat-tab-group>
```

- <!---How---> The code in [Angular.Material](https://material.angular.io/components/tabs/overview) was implemented by Angular
- <!---Why---> [Angular.Material](https://material.angular.io/components/tabs/overview)'s Code was used because I need a tab work as a information tab to organize the information panel when the viewpoint is greater than 1024px. Instead of a long list that is hard to read, this tab improve the readability.
- <!---How---> [Angular.Material](https://material.angular.io/components/tabs/overview)'s Code was modified by Jiali. I add more tabs to show five tabs in product page. It includes More information, Details and sepecification, what's included, reviews, and return policies.
  
### productpage.component.html

*Lines 22 - 54*

```
<div id="productImage" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#productImage" data-slide-to="0" class="active"></li>
        <li data-target="#productImage" data-slide-to="1"></li>
        <li data-target="#productImage" data-slide-to="2"></li>
        <li data-target="#productImage" data-slide-to="3"></li>
        <li data-target="#productImage" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="assets/image/product.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="assets/image/product2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="assets/image/product3.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="assets/image/product4.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="assets/image/product5.jpg" class="d-block w-100" alt="...">
        </div>
    </div>
    <a class="carousel-control-prev" href="#productImage" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#productImage" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
```

The code above was created by adapting the code in [Bootstrap4](https://getbootstrap.com/docs/4.3/components/carousel/) as shown below:

```
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

- <!---How---> The code in [Bootstrap4](https://getbootstrap.com/docs/4.3/components/carousel/) by Bootstrap4 team
- <!---Why---> [Bootstrap4](https://getbootstrap.com/docs/4.3/components/carousel/)'s Code was used because I need a slider function to show product pictures. The indicators helps iser to identify how many pictures there are. The control buttons allow users to choose which picture they want to view.
- <!---How---> [Bootstrap4](https://getbootstrap.com/docs/4.3/components/carousel/)'s Code was modified by Jiali. I add more pictures and lists so that I can show more pictures.

### productpage.component.html

*Lines 228 - 437*

```
<div class="accordion" id="productDetails">
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#info" aria-expanded="true" aria-controls="info">
                More Information
                </button>
            </h2>
        </div>
    
        <div id="info" class="collapse" aria-labelledby="headingOne" data-parent="#productDetails">
            <div class="card-body">
                    <ul>
                        <li>7th generation AMD A6-9225 processor and 8GB of DDR4-SDRAM for high performance and smooth operation at premium speed</li>
                        <li>1 TB hard drive with 5400rpm provides enough space to store your data, movies, music, and photos</li>
                        <li>15.6'' diagonal HD SVA BrightView WLED-backlit screen with a 1366 x 768 resolution lets you enjoy vivid colours and crystal-clear view</li>
                    </ul>
            </div>
        </div>
        ...
    </div>
</div>
```

The code above was created by adapting the code in [Bootstrap4](https://getbootstrap.com/docs/4.3/components/collapse/) as shown below:

```
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
```

- <!---How---> The code in [Bootstrap4](https://getbootstrap.com/docs/4.3/components/collapse/) by Bootstrap4 team
- <!---Why---> [Bootstrap4](https://getbootstrap.com/docs/4.3/components/collapse/)'s Code was used because in the smaller viewpoint, it is hard to recognize the page's structure. With this collapse list, user can easily locate their information and read material easily. It helps improve the readability of the website.
- <!---How---> [Bootstrap4](https://getbootstrap.com/docs/4.3/components/collapse/)'s Code was modified by Jiali. I organize it to contain tables so that each tab can hide information. 

### productpage.component.html

*Lines 259 - 437*

```
<table class="table table-striped my-3">
    <thead>
        <h5>Display</h5>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Screen Size</th>
            <td>15.6 in</td>
        </tr>
        <tr>
            <th scope="row">Native Screen Resolution</th>
            <td>1366 x 768</td>
        </tr>
        <tr>
            <th scope="row">Touchscreen Display</th>
            <td>No</td>
        </tr>
        <tr>
            <th scope="row">Convertible/Hybrid Display</th>
            <td>No</td>
        </tr>
    </tbody>
</table>
```

The code above was created by adapting the code in [Bootstrap4](https://getbootstrap.com/docs/4.3/content/tables/) as shown below:

```
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    ...
  </tbody>
</table>
```

- <!---How---> The code in [Bootstrap4](https://getbootstrap.com/docs/4.3/content/tables/) by Bootstrap4 team
- <!---Why---> [Bootstrap4](https://getbootstrap.com/docs/4.3/content/tables/)'s Code was used because reading a lot of text on the website. When using tables, user could read faster. The Striped rows improves the readability of text. It organize information and helps user to recognize different lines.
- <!---How---> [Bootstrap4](https://getbootstrap.com/docs/4.3/content/tables/)'s Code was modified by Jiali. I remove some extra columns to make it suitable for my design. I also add tr and th in the thead so that the table is organized better.

## Creative Commons images used

[1]	“Home Office Workstation - Free photo on Pixabay.” [Online]. Available: https://pixabay.com/photos/home-office-workstation-office-336378/. [Accessed: 15-Nov-2019].

[2]	“Home Office Workstation - Free photo on Pixabay.” [Online]. Available: https://pixabay.com/photos/home-office-workstation-office-336373/. [Accessed: 15-Nov-2019].

[3]	“Workstation Office Business - Free photo on Pixabay.” [Online]. Available: https://pixabay.com/photos/workstation-office-business-336369/. [Accessed: 15-Nov-2019].

[4]	“Home Office Workstation - Free photo on Pixabay.” [Online]. Available: https://pixabay.com/photos/home-office-workstation-office-336377/. [Accessed: 15-Nov-2019].

[5]	“Blogging Blogger Office - Free photo on Pixabay.” [Online]. Available: https://pixabay.com/photos/blogging-blogger-office-business-336376/. [Accessed: 15-Nov-2019].

[6]	“HP 15.6" Laptop - Black (AMD A6-9225 Processor/1TB HDD/8GB RAM/Windows 10) - English | Best Buy Canada.” [Online]. Available: https://www.bestbuy.ca/en-ca/product/hp-15-6-laptop-black-amd-a6-9225-processor-1tb-hdd-8gb-ram-windows-10-english/13617881. [Accessed: 16-Nov-2019].

## About web crawller

Since the web crawller in A2 is built based on BestBuy website, which is very different from the current assignment. Therefore, I didn't include a crawller result since they works differently.
