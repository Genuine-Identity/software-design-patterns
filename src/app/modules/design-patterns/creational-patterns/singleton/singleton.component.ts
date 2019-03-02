import { Component, OnInit } from '@angular/core';
import { Singleton } from 'src/app/design-patterns/creational-patterns/singleton/singleton';
import { SingletonCounter } from 'src/app/design-patterns/creational-patterns/singleton/singleton-counter';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})

export class SingletonComponent implements OnInit {
  public show: boolean = true;
  result: string;
  singleton1: any;
  singleton2: any;
  counter: any;

  constructor() { }

  ngOnInit() {
    this.onInitializeCounter();
  }

  onSingletonClick1() {
    this.singleton1 = Singleton.getInstance();
    this.show = true;
  }

  onSingletonClick2() {
    this.singleton2 = Singleton.getInstance();
    this.show = true;
  }

  onCompare() {
    if (this.singleton1 === this.singleton2) {
      this.result = (this.singleton1 == null || this.singleton2 == null) ? "singleton class is not initialized" : "two singletons are equivalent";
    } else {
      this.result = "two singletons are not equivalent";
    }
  }

  onReset() {
    this.singleton1 = null;
    this.singleton2 = null;
    this.show = true;
    this.result = "";
  }

  onInitializeCounter() {
    const instance = SingletonCounter.getInstance();
    this.counter = instance.temperature;
  }

  onTemperatureIncrease() {
    const instance = SingletonCounter.getInstance();
    this.counter = instance.increaseTemperature();
  }
  
  onTemperatureDecrease() {
    const instance = SingletonCounter.getInstance();
    this.counter = instance.decreaseTemperature();
  }
}
