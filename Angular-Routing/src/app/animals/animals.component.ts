import { Component } from '@angular/core';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.css'
})
export class AnimalsComponent {
animals = [
    { name: 'Scimmia', emoji: '🐒' },
    { name: 'Cane', emoji: '🐶' },
    { name: 'Lupo', emoji: '🐺' },
    { name: 'Gatto', emoji: '🐱' },
    { name: 'Tigre', emoji: '🐅' },
    { name: 'Leopardo', emoji: '🐆' },
    { name: 'Cavallo', emoji: '🐎' },
    { name: 'Toro', emoji: '🐂' },
    { name: 'Mucca', emoji: '🐄' },
    { name: 'Maiale', emoji: '🐷' },
    { name: 'Cinghiale', emoji: '🐗' },
    { name: 'Ariete', emoji: '🐏' },
    { name: 'Pecora', emoji: '🐑' },
    { name: 'Capra', emoji: '🐐' },
    { name: 'Cammello', emoji: '🐪' },
    { name: 'Elefante', emoji: '🐘' },
    { name: 'Topolino', emoji: '🐭' },
    { name: 'Topo', emoji: '🐀' },
    { name: 'Coniglio', emoji: '🐰' },
    { name: 'Orso', emoji: '🐻' },
    { name: 'Koala', emoji: '🐨' },
    { name: 'Panda', emoji: '🐼' },
    { name: 'Gallo', emoji: '🐓' },
    { name: 'Pulcino', emoji: '🐥' },
    { name: 'Pinguino', emoji: '🐧' },
    { name: 'Rana', emoji: '🐸' },
    { name: 'Coccodrillo', emoji: '🐊' },
    { name: 'Tartaruga', emoji: '🐢' },
    { name: 'Serpente', emoji: '🐍' },
    { name: 'Drago', emoji: '🐉' },
    { name: 'Balena', emoji: '🐳' },
    { name: 'Delfino', emoji: '🐬' },
    { name: 'Pesce', emoji: '🐟' },
    { name: 'Seppia', emoji: '🐙' },
    { name: 'Paguro', emoji: '🐚' },
    { name: 'Lumaca', emoji: '🐌' },
    { name: 'Bruco', emoji: '🐛' },
    { name: 'Formica', emoji: '🐜' },
    { name: 'Ape', emoji: '🐝' },
    { name: 'Coccinella', emoji: '🐞' }
  ];
}
