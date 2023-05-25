import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
