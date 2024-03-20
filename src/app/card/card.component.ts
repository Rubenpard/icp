import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../models/modelo.ficha';
import { DataService } from '../data/data.Service';
import { CommonModule } from '@angular/common';
import { FichaComponent } from '../ficha/ficha.component';

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

  constructor(){
    console.log(this.lista);
  }
  ngOnInit(): void {
  }

    elegirPelicula(tarjeta: Tarjeta):void{
      this.tarjetaSelect = tarjeta;
      console.log(tarjeta);
    }

}