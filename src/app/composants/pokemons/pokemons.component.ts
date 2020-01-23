import { Component, OnInit } from '@angular/core';
import {MonServiceService} from '../../Services/mon-service.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {


  msg: string;
  pokemons ;
  constructor(private service: MonServiceService) { }
  obtenirPokemon() {
    this.pokemons = this.service.obtenirPokemon();
  }
  ngOnInit() {
    this.obtenirPokemon();
  }

}
