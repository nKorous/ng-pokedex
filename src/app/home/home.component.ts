import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonList: any = []
  selectedPokemon: any
  pokemonImg: string = ""

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getPokemonList()
  }

  getPokemonList() {
    this.dataService.getPokemonList().subscribe(pokemon => {
      this.pokemonList = pokemon.results
      console.log(this.pokemonList)
    })
  }

  getPokemon(pokemon: {name: string, url: string}) {
    this.dataService.getUrl(pokemon.url).subscribe((pokemon: any) => {
      this.selectedPokemon = pokemon
      this.pokemonImg = pokemon.sprites.other['official-artwork'].front_default !== null
        ? pokemon.sprites.other['official-artwork'].front_default
        : pokemon.sprites.front_default
      console.log('selectedPokemon', this.selectedPokemon)
    })
  }



}
