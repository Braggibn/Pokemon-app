import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/models/pokemon';
import { PokemonService } from '../../services/pokemon.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  pokemonOAK: IPokemon[]

  constructor(public pokeLista: PokemonService) { }
  ngOnInit(): void {
    this.pokemonOAK = this.pokeLista.getCaptured();
    console.log(this.pokemonOAK)
  }

  healPokemon(pokemon : IPokemon){
    const herido = this.pokemonOAK.map((items) =>{
      if(items.defens <= 100){
        return {
          ...items,
          defens: items.defens = 100
        }
      }
      return items;
    })
  }
  
  releasePoke(pokemon : IPokemon ){
    this.pokeLista.releasePokemon(pokemon)
  }

  }
