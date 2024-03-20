import { Component,ViewEncapsulation, Input  } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { FichaComponent } from '../ficha/ficha.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [CardComponent, CommonModule, FichaComponent],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FrameComponent {

  abrirFicha(datos:any) : void{
console.log();
  } 

}
