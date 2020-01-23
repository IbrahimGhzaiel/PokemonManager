import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {
  private unAttribut = 'Générations de Pokémons';
  private generations = ['Géneration I', 'Géneration II', 'Géneration III', 'Géneration IV', 'Géneration V', 'Géneration VI', 'Géneration VII'];

  constructor() {
  }

  ngOnInit() {
  }

}
