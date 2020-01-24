import { Injectable } from '@angular/core';
import {Pokemon} from '../modeles/pokemon';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {
  pokemons = [
    {
      id: 1,
      nom: 'Bulbizarre',
      categorie: 'graine',
      type: ['plante', 'poison'],
      taille: 0.7,
      poids: 69
    },
    {
      id: 2,
      nom: 'Herbizarre',
      categorie: 'graine',
      type: ['plante', 'poison'],
      taille: 1,
      poids: 13
    },
    {
      id: 3,
      nom: 'Florizarre',
      categorie: 'une graine',
      type: ['plante', 'poison'],
      taille: 0.7,
      poids: 6.9
    },
    {
      id: 4,
      nom: 'Salamèche',
      categorie: 'lézard',
      type: ['feu'],
      taille: 0.6,
      poids: 8.5
    },
    {
      id: 5,
      nom: 'Reptincel',
      categorie: 'flamme',
      type: ['feu'],
      taille: 1.1,
      poids: 19
    },
    {
      id: 6,
      nom: 'Dracaufeu',
      categorie: 'flamme',
      type: ['feu', 'vol'],
      taille: 1.7,
      poids: 90.5
    }
  ]
  constructor() { }
  //Compter le nbre de pokemons
  cpt(): number {
    const nbre = this.pokemons.length;
    return nbre;
    //ici on peut mettre juste return this.pokemons.length; au lieu de les lignes 61 et 62
  }

  //Retourner le tableau de pokemons
  obtenirPokemon(): Array<Pokemon> {
    return this.pokemons;
  }


 triPokemon(nomReche) {
    let  regex = new RegExp(nomReche,'gi');
   return this.pokemons.filter(p => p.nom.match(regex));
    //if (this.pokemons.indexOf(nomReche));

  }
}
