import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  @ViewChild('sidenav',{static:false}) sidenav: MatSidenav;

  close() {
    this.sidenav.close();
  }
  constructor() { }

  ngOnInit() {
  }

}
