import { Component, Input } from '@angular/core';
import { Tarjeta } from '../models/modelo.ficha';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent {

  @Input() tarjeta: Tarjeta;

  constructor(){
  }

  ngOnInit():void{
    console.log('tarjeta detalle', this.tarjeta);
  }

  ngOnChanges():void{};

}
