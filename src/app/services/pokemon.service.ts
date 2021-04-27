import { Injectable } from '@angular/core';
import { IPokemon } from '../models/pokemon';
 
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonCapturado : IPokemon []

    
  constructor() { 
      this.pokemonCapturado = [
          // {name: 'string', type: 'string' , atack: 1 ,defens: 22, espcial: 22}
      ];
  }

  getCaptured(){
    if(localStorage.getItem('listaP') === null){
      return this.pokemonCapturado;
    }else{
      this.pokemonCapturado = JSON.parse(localStorage.getItem('listaP'));
      return this.pokemonCapturado;
    }
      
  }

  capturePokemon(pokemon : IPokemon){
    this.pokemonCapturado.push(pokemon)
    let pokemonCapturados : IPokemon[] = [];
    if(localStorage.getItem('listaP')===null){
      pokemonCapturados.push(pokemon)
      localStorage.setItem('listaP' , JSON.stringify(pokemonCapturados))
    }else{
      pokemonCapturados = JSON.parse(localStorage.getItem('listaP'));
      pokemonCapturados.push(pokemon);
      localStorage.setItem('listaP', JSON.stringify(pokemonCapturados));

    }
    
  }
  releasePokemon(pokemonCapturado : IPokemon){
    for(let i = 0; i < this.pokemonCapturado.length; i++){
      if(pokemonCapturado == this.pokemonCapturado[i]){
        this.pokemonCapturado.splice(i,1)
        localStorage.setItem('listaP', JSON.stringify(this.pokemonCapturado))
      }
    }
  }

}
