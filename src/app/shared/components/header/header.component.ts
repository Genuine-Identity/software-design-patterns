import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { User } from '../../models';
import { LocalStorageService } from '../../../core/services/helpers/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  private user: User;
  constructor(private router: Router,
    private localStorage: LocalStorageService) {
  }

  ngOnInit() {
    this.bindUserDetails();
  }

  bindUserDetails() {
    this.user = JSON.parse(this.localStorage.getItem("userSession"));
  }

  onSignOut() {
    this.localStorage.removeItem("userSession");
    this.localStorage.removeItem('users');
    this.localStorage.removeItem('currentUser');
    this.router.navigate(['/user/login']);
  }
}