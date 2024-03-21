import { Component, Input } from '@angular/core';
import { Tarjeta } from '../models/modelo.ficha';
import { FormularioComponent } from '../formulario/formulario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [FormularioComponent],
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

  mostrarFormulario: boolean = false;

  showFormulario(): void {
    this.mostrarFormulario = true;
  }

  ocultarFormulario(): void {
    this.mostrarFormulario = false;
  }

}
