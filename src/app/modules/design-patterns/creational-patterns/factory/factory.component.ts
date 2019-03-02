import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPlane } from 'src/app/design-patterns/creational-patterns/factory/IPlane';
import { PlaneType } from 'src/app/design-patterns/creational-patterns/factory/plane-type';
import { PlaneFactory } from 'src/app/design-patterns/creational-patterns/factory/plane-factory';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {
  public show: boolean = false;
  form: FormGroup;
  plane: string;
  planes = [
    { 'id': 1, 'name': 'AirBus' },
    { 'id': 2, 'name': 'Boeing' },
  ];

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.bindForm();
  }
  bindForm() {
    this.form = this.formBuilder.group({
      plane: [1]
    });
  }
  onFly() {
    let planeType: PlaneType;
    planeType = (this.form.value.plane == 1) ? PlaneType.AirBus : PlaneType.Boeing;
    const boeingPlane: IPlane = PlaneFactory.getPlaneInstance(planeType);
    this.plane = boeingPlane.fly();
    this.show = true;
  }
  onLand() {
    let planeType: PlaneType;
    planeType = (this.form.value.plane == 1) ? PlaneType.AirBus : PlaneType.Boeing;
    const boeingPlane: IPlane = PlaneFactory.getPlaneInstance(planeType);
    this.plane = boeingPlane.land();
    this.show = true;
  }
  onClick() {
    this.show = false;
  }
}
