import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatCardModule, MatSelectModule, MatIconModule } from '@angular/material';
import { MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatTabsModule} from '@angular/material/tabs';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AccountComponent } from './account/account.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { PageNotFondComponent } from './page-not-fond/page-not-fond.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

import { from } from 'rxjs';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,    
    AccountComponent,
    RegistrationComponent,
    ProductpageComponent,
    PageNotFondComponent,
    LandingpageComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatCardModule, 
    MatSelectModule, 
    MatIconModule,
    MatGridListModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule
  ],
  entryComponents: [AccountComponent,RegistrationComponent],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
