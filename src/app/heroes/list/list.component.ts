import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = [ 'Iron Man', 'Spider Man', 'Hulk', 'Black Panther', 'Goku', 'Vegeta' ];
  public deleteHeros?: string;

  remoteLastHero(): void {
    this.deleteHeros = this.heroNames.pop();
  }
}
