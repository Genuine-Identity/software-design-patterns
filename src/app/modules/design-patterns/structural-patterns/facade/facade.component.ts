import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

import { User } from 'src/app/shared/models';
import { Facade } from 'src/app/design-patterns/structural-patterns/facade/facade';
import { UserHelper } from 'src/app/design-patterns/structural-patterns/facade/user-helper';
 
@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.css']
})

export class FacadeComponent implements OnInit {
  public show: boolean = false;
  data: string;
  form: FormGroup;
  public users: Observable<User[]>;

  constructor(private facade: Facade, private userHelper: UserHelper,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bindUserList();
    this.bindForm();
  }
  bindForm() {
    this.form = this.formBuilder.group({
      user: [1]
    });
  }
  bindUserList() {
    this.users = this.userHelper.getAll();
  }
  onGetInfo() {
    this.getUserDetails(this.form.value.user);
    this.show = true;
  }
  getUserDetails(id: any) {
    this.facade.getAccountDetails(id).subscribe(data => {
      this.data = data;
    });
  }
  onReset() {
    this.show = false;
  }
}
