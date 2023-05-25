import { map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  private url :string = 'https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0';

  get   (): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap({
        next: res=> {
          res.results.map((resPokemon: any)=>{
            this.apiGetPokemons(resPokemon.url  ).subscribe(
              res => resPokemon.status = res,

            )
          })
        },
        error:error =>error}
      )

      );
  }

  public apiGetPokemons(url: string) : Observable<any>{
    return this.http.get<any>(url).pipe(
      map(res => res));
  }
}
