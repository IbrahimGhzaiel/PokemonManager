import { Component, OnInit } from '@angular/core';
import {MonServiceService} from '../../Services/mon-service.service';
import {Pokemon} from '../../modeles/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  cpteur: number;
  msg: string;
  pokemons: Array<Pokemon> ;
  private nomReche: string;

initTableau() {
  this.obtenirPokemon();
  this.cpteur =this.service.cpt();
}
  constructor(private service: MonServiceService) { }
  obtenirPokemon() {
    this.pokemons = this.service.obtenirPokemon();
  }
  ngOnInit() {
    this.initTableau();
  }

  envoyer(nomReche) {
 this.pokemons = this.service.triPokemon(nomReche);

  }

  reinitRecherche() {
  this.pokemons = this.service.obtenirPokemon();
  }
}
