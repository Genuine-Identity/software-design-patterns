import { Component, OnInit } from '@angular/core';
import { Facade } from 'src/app/design-patterns/structural-patterns/facade/facade';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.css']
})
export class FacadeComponent implements OnInit {
  facade: Facade;
  constructor() { }

  ngOnInit() {
    this.getUserDetails();
  }
  getUserDetails() {
    this.facade = new Facade();
    this.facade.getUserDetails(1);
  }
}
