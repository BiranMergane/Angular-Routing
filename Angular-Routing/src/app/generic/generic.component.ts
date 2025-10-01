import { Component } from '@angular/core';
import { ANIMALS, Emoji, FRUITS, FOODS, VEHICLES } from './models/emoji.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.css'
})
export class GenericComponent {
  // Inizializza un array vuoto di Emoji
  genVect: Emoji[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  // Gestisce il cambio dei parametri della route
  getRouterParam = (params: ParamMap) => {
    let uri_param = params.get('id');
    console.log(uri_param);

    switch (uri_param) {
      case 'fruits':
        this.genVect = FRUITS;
        break;
      case 'animals':
        this.genVect = ANIMALS;
        break;
      case 'food':
        this.genVect = FOODS;
        break;
      case 'vehicles':
        this.genVect = VEHICLES;
        break;
      default:
        this.genVect = [];
    }
  }
}
