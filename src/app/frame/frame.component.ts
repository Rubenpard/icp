import { Component,ViewEncapsulation, Input  } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FrameComponent {

  datos =[
    {
      id:'1',
      src: '../assets/images/card-el-padrino.jpg',
      name:'El Padrino',
      year: '1972',
      duracion:'175',
      texto:'Html5 ameeeeizing',
    },

    {
      id:'2',
      src: '../assets/images/card-fast-and-furious.png',
      name:'Fast and Furious',
      year: '2015',
      duracion:'140',
      texto:'css3 ameeeeizing',
    },
    {
      id:'3',
      src: '../assets/images/card-oppenheimer.jpg',
      name:'Oppenheimer',
      year: '2023',
      duracion:'140',
      texto:'JavaDeEscript ameeeeizing',
    },
    {
      id:'4',
      src: '../assets/images/card-come-reza-ama.jpg',
      name:'Come, reza, ama',
      year: '2010',
      duracion:'133',
      texto:'JavaDeEscript ameeeeizing',
    }
    ,
    {
      id:'5',
      src: '../assets/images/card-toy-story.jpg',
      name:'Toy Story',
      year: '1995',
      duracion:'80',
      texto:'JavaDeEscript ameeeeizing',
    }


  ];

}
