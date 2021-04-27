import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { PokemonService } from '../../services/pokemon.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  @ViewChild("pokemonName") pokemonName;

  displayedColumns : String[] = ['position', 'name' , 'image'];
  data : any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  capturaPoke:FormGroup = new FormGroup(
    {
      name : new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required]),
      atack: new FormControl('',[Validators.required]),
      defens: new FormControl('',[Validators.required]),
      espcial: new FormControl('',[Validators.required])
    }
  );
  pokemon = []
  pokemonList: any = '';
  pokemingType= [];
  pokemonImg= '';
  atack='';
  special= '';
  defens='';
  @ViewChild(MatPaginator, {static :true}) paginator : MatPaginator;
  

  constructor(private pokeservice : PokemonService ,private apiService : ApiService) { }

  ngOnInit(): void {
    
    this.getPokemon();
  }
  getPokemon(){
    let pokemonData;
    // for(let i= 810 ; i <=892; i++){
    for(let i= 1 ; i <=150; i++){
      this.apiService.getPokemon(i).subscribe(
        res =>{
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          }
          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<any>(this.data);
          this.dataSource.paginator = this.paginator;

        },
        err=>{
          console.log(err)
        }
      )
    }
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRow(id){
    this.apiService.getPokemon(id).subscribe(
      res => {
        this.pokemonList = res;
        this.pokemonImg = this.pokemonList.sprites.front_default;
        this.pokemingType = res.types[0].type.name;
        this.atack = this.pokemonList.stats[1].base_stat;
        this.special = this.pokemonList.stats[2].base_stat;
        this.defens = this.pokemonList.stats[3].base_stat;

        this.capturaPoke.setValue({
          name: this.pokemonList.name,
          type: this.pokemingType,
          atack: this.atack,
          defens: this.defens,
          espcial: this.special
        })
        console.log(this.pokemonList)
      },
      err =>{
        console.log(err)
      }
      
    )
    this.pokemonName.nativeElement.focus();

  }


  
  capturaPokemon(){
    console.log(this.capturaPoke.value);
    this.pokeservice.capturePokemon(
      this.capturaPoke.value
    )
    this.pokemonImg = '../../../../../assets/images/egg.png'
    this.capturaPoke.setValue({
      name:'',
      type: '',
      atack: '',
      defens: '',
      espcial: ''
    }) 
    console.log(this.pokeservice.getCaptured());
  }
}
