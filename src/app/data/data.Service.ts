
import { Valoracion } from '../formulario/valoracion';
import { Tarjeta } from '../models/modelo.ficha';

export const DataService: Tarjeta[]=[
    {
      id: 1,
      src: '../assets/images/card-el-padrino.jpg',
      name:'El Padrino',
      year: '1972',
      duracion:'175',
      texto:'Drama biográfico de corte histórico basado en American Prometheus, la biografía escrita por Kai Bird y Martin J. Sherwin en torno a la figura del científico J. Robert Oppenheimer y su rol en la creación y desarrollo de la bomba atómica. \n  16 de julio de 1945, en el desierto de Nuevo México se detona en secreto la primera bomba atómica.\
      En tiempos de guerra, el brillante físico estadounidense Julius Robert Oppenheimer (Cillian Murphy), al frente del proyecto Manhattan, lidera los ensayos nucleares para construir la bomba atómica para su país.Impactado por su poder destructivo, Oppenheimer se cuestiona las consecuencias morales de su creación. \
      Desde entonces y durante el resto de su vida, se opondría firmemente a la guerra nuclear y a la todavía más destructiva bomba de hidrógeno. \
      Su vida daría así un profundo vuelco, pasando de tener un papel fundamental en el mapa político de la Guerra Fría a ser acusado de comunista en la era McCarthy. Cuestionando su lealtad, Oppenheimer fue tachando de espía de la Unión Soviética y obligado a dimitir de cualquier función pública.',
      valoracion: new Valoracion ,
    },

    {
      id: 2,
      src: '../assets/images/card-fast-and-furious.png',
      name:'Fast and Furious',
      year: '2015',
      duracion:'140',
      texto:'El director James Wan, encargado de películas como Saw o Insidious coge el relevo de Justin \
      Lin y se pone al cargo de la séptima entrega de esta saga sobre ruedas protagonizada por Vin Diesel \
      (Las crónicas de Riddick).De nuevo los problemas les persiguen. Sin conseguir librarse de la mancha \
      de criminales de su ficha. Su pasado de larga trayectoria en las carreras ilegales les perseguirá y \
      deberán hacer frente a las circunstancias de la única forma que saben. Cuando les pongan entre la \
      espada y la pared idearán un plan para escapar del peligro en una trepidante carrera por salvar \
      la vida y limpiar su reputación. Acción, persecuciones y un ritmo frenético en esta nueva entrega.',
      valoracion: new Valoracion,
    },
    {
      id: 3,
      src: '../assets/images/card-oppenheimer.jpg',
      name:'Oppenheimer',
      year: '2023',
      duracion:'140',
      texto:'Drama biográfico de corte histórico basado en American Prometheus, la biografía escrita por \
      Kai Bird y Martin J. Sherwin en torno a la figura del científico J. Robert Oppenheimer y su rol en \
      la creación y desarrollo de la bomba atómica. 16 de julio de 1945, en el desierto de Nuevo México \
      se detona en secreto la primera bomba atómica. En tiempos de guerra, el brillante físico \
      estadounidense Julius Robert Oppenheimer (Cillian Murphy), al frente del proyecto Manhattan, \
      lidera los ensayos nucleares para construir la bomba atómica para su país. Impactado por su poder \
      destructivo, Oppenheimer se cuestiona las consecuencias morales de su creación. Desde entonces y \
      durante el resto de su vida, se opondría firmemente a la guerra nuclear y a la todavía más \
      destructiva bomba de hidrógeno. Su vida daría así un profundo vuelco, pasando de tener un papel \
      fundamental en el mapa político de la Guerra Fría a ser acusado de comunista en la era McCarthy. \
      Cuestionando su lealtad, Oppenheimer fue tachando de espía de la Unión Soviética y obligado a \
      dimitir de cualquier función pública.',
      valoracion: new Valoracion,
    },
    {
      id: 4,
      src: '../assets/images/card-come-reza-ama.jpg',
      name:'Come, reza, ama',
      year: '2010',
      duracion:'133',
      texto:'Liz Gilbert tiene todo con lo que una mujer moderna se supone que debe soñar con tener \
      - un marido, una casa, una exitosa carrera - sin embargo, como tantos otras personas, se encuentra \
      perdida, confusa, buscando lo que realmente quiere en la vida. Recién divorciada y ante una \
      encrucijada, Gilbert sale de su zona de confort, arriesgando todo para cambiar su vida, \
      embarcándose en un viaje alrededor del mundo que se convierte en una búsqueda de sí misma \
      en la que poco a poco descubrirá qué es lo que le llena. En sus viajes, descubre el verdadero \
      placer de comer en Italia; el poder de la oración en la India, y, por último y de forma inesperada, \
      la paz interior y el equilibrio del verdadero amor en Bali. Dirigida por Ryan Murphy \
      (American Horror Story), Come, reza, ama es la adaptación de la obra homónima publicada \
      por la propia Elizabeth Gilbert. La película está protagonizada por Julia Roberts en el papel \
      protagonista, y Javier Bardem, Viola Davis y James Franco como co-protagonistas.',
      valoracion: new Valoracion,
    }
    ,
    {
      id: 5,
      src: '../assets/images/card-toy-story.jpg',
      name:'Toy Story',
      year: '1995',
      duracion:'80',
      texto:'Cuando el pequeño Andy se va de su habitación, sus juguetes cobran vida y forman toda una \
      sociedad bajo el liderazgo de su muñeco favorito, Woody el vaquero. El chico también ignora que \
      cada cumpleaños es un momento de angustia para sus juguetes, debido a que se sienten realmente \
      aterrados al pensar que pueden ser suplantados por unos nuevos. Woody es el único juguete al que \
      esto no le preocupa, pues cree asegurado su estatus de mejor amigo de Andy. Sin embargo, el mudno \
      del vaquero se derrumba cuando uno de los regalos del último cumpleaños de Andy es un Buzz Lightyear, \
      un sofisticado y moderno juguete espacial que está teniendo gran éxito en ese momento. \
      Este intrépido aventurero del espacio, casi sin proponérselo, se granjea el cariño total de Andy, \
      por lo que éste pasa a prácticamente sólo jugar con él y marginar a Woody. El vaquero, tremendamente \
      resentido, fraguará un plan para deshacerse de Buzz Lightyear, pero ése solo será el principio de \
      unas intensas aventuras en las que ambos juguetes, irónicamente, acabarán convirtiéndose en los \
      mejores amigos del mundo.',
      valoracion: new Valoracion  ,
    }
  ];
