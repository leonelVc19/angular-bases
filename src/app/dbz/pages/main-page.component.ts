import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { DbzService } from '../servers/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzServer: DbzService){
  }

  get characters(): Character[] {
    return [...this.dbzServer.characters];
  }

  onDeleteCharacter( id: string):void {
    this.dbzServer.deleteCharacterById( id )
  }

  onNewCharacter(character: Character): void {
    this.dbzServer.addCharacter(character);
  }
}
