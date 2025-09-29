import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css'
})
export class FruitsComponent {
  fruits = [
    { name: 'Uva', emoji: '🍇' },
    { name: 'Melone', emoji: '🍈' },
    { name: 'Anguria', emoji: '🍉' },
    { name: 'Arancia', emoji: '🍊' },
    { name: 'Limone', emoji: '🍋' },
    { name: 'Banana', emoji: '🍌' },
    { name: 'Ananas', emoji: '🍍' },
    { name: 'Mela Rossa', emoji: '🍎' },
    { name: 'Mela Verde', emoji: '🍏' },
    { name: 'Pera', emoji: '🍐' },
    { name: 'Pesca', emoji: '🍑' },
    { name: 'Ciliegia', emoji: '🍒' },
  ];
}
