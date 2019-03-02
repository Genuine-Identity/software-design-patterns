import { Component, OnInit } from '@angular/core';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {
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