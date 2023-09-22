import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list-dbz',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Truks',
    power: 10
  }]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void {
    //TODO: Emitor el ID del Personaje

    if( !id ) return;
    this.onDeleteId.emit(id);
  }
}
