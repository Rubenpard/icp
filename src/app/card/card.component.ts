import { Component, OnInit,Input } from '@angular/core';
import { Tarjeta } from '../models/modelo.ficha';
import { DataService } from '../data/data.Service';
import { CommonModule } from '@angular/common';
import { FichaComponent } from '../ficha/ficha.component';
import { Valoracion } from '../formulario/valoracion';

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
  validar: Valoracion=new Valoracion();
  estados: string[]=['1 estrella','2 estrella','3 estrella','4 estrella','5 estrella'];

  constructor(){
  }
  ngOnInit(): void {
    this.validar.estado=this.estados[1];
  }

    elegirPelicula(tarjeta: Tarjeta):void{
      this.tarjetaSelect = tarjeta;
    }

    onRatingChange(): void {
    }

}