import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent {
 @Output() public emmiterSeach : EventEmitter<string> = new EventEmitter();

 public search(value: string){
  this.emmiterSeach.emit(value);
 }
}
