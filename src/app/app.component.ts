import { Component, OnInit } from '@angular/core';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { UserService } from './core/services/application/user.service';
import { LocalStorageService } from './core/services/helpers/local-storage.service';
import { User } from './shared/models';
import { first } from 'rxjs/operators';
import { AuthService } from './core/services/application/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user: User;
  constructor(private router: Router,
    private userService: UserService,
    private localStorage: LocalStorageService,
    private authService: AuthService, ) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {
    this.initFakeBackendDatabase();
    this.authorization();
  }
  private initFakeBackendDatabase(): void {
    this.initUserDatabase();
  }
  private initUserDatabase(): void {
    this.user = new User("intelchiprules@yahoo.co.in", "admin@123", "Girish", "Nandgawe", "B.E. Computers", ["Asp.Net", "C#", "SQL", "Angular 2+", "HTML"], "1");
    this.userService.register(this.user).pipe(first()).subscribe(data => { }, error => { });
  }


  private authorization() {
    this.authService.login("intelchiprules@yahoo.co.in", "admin@123")
      .pipe(first())
      .subscribe(
        data => {
          console.log("Authentication Successfull");
        },
        error => {
          console.log(error);
        }
      );
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      console.log("this._loadingBar.start();");
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => { console.log("this._loadingBar.complete();") }, 500);
      ;
    }
    if (event instanceof NavigationCancel) {
      setTimeout(() => { /*Your Code*/ }, 500);
      console.log("this._loadingBar.stop();");

    }
    if (event instanceof NavigationError) {
      setTimeout(() => { /*Your Code*/ }, 500);
      console.log("this._loadingBar.stop();");
    }
  }
}