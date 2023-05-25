import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'http://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'http://pokeapi.co/api/v2/pokemon-species';

  constructor(private route: ActivatedRoute, private pokeApi: PokeApiService){}


  ngOnInit(): void {
    this.pokemon;
  }


  get pokemon(){
    const id = this.route.snapshot.params['id'];
    const pokemon = this.pokeApi.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApi.apiGetPokemons(`${this.urlName}/${id}`);

    forkJoin([pokemon, name]).subscribe({
      next: (res: any) => console.log(res),
      error: (error: any) => error
    });
    return
  }
}
