import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name :string = 'ironMan';
  public age :number = 45;

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase()
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeNameHero():void {
    this.name = 'Komi Shouko';
  };

  changeAgeHero():void {
    this.age = 16;
  }

  resetForm():void {
    this.name = 'ironMan';
    this.age = 45;
  }

}
