import { Component, OnInit } from '@angular/core';

import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  public getAllPokemon: any;
  public setAllPokemon: any;

  constructor(private pokeApiService: PokeApiService){};

  ngOnInit(): void {
    this.pokeApiService.get().subscribe({
      next: res => {
        this.setAllPokemon = res.results
        this.getAllPokemon = this.setAllPokemon
        console.log("oi")
      },
      error: error => error
    });
  }

  public getSearch  (value: string): void {
    const filter = this.setAllPokemon.filter((res: any) =>{
        return !res.name.indexOf(value.toLowerCase());
    });

    return this.getAllPokemon = filter;
  }
}
