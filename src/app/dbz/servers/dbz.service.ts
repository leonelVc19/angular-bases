import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid'

//DECORADOR
@Injectable({
  providedIn: 'root'
})

export class DbzService {
  constructor() { }
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 10000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7000
  }];

  addCharacter(character: Character):void {
    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(newCharacter)

  }

  // onDeleteCharacter(index:string):void {
  //  this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string) {
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
