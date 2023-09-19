import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent{
  constructor() { }

  public counter: number = 10;

  increaseBy(v: number){
    this.counter += v;
  }

  resetCounter( ) {
    this.counter = 10;
  }

}
