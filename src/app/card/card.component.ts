import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../models/modelo.ficha';
import { DataService } from '../data/data.Service';
import { CommonModule } from '@angular/common';
import { FichaComponent } from '../ficha/ficha.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FichaComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  lista: Tarjeta[]=DataService;
  tarjetaSelect : Tarjeta;
  rating: number = 0;

  constructor(){
  }
  ngOnInit(): void {
  }

    elegirPelicula(tarjeta: Tarjeta):void{
      this.tarjetaSelect = tarjeta;
    }

    onRatingChange(): void {
    }

}