import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() imagen: string;
  @Input() title: string;
  @Input() description: string;
  @Input() year: string;
  @Input() duracion: string;

  constructor() {
    this.imagen = '';
    this.title = '';
    this.description = '';
    this.year = '';
    this.duracion = '';
  }

}