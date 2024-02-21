import { Component } from '@angular/core';
import { PhotoModel } from '../model/photo.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  photos: PhotoModel[] = [];
  constructor() {
    this.photos = [
      {
        imageUrl: '../assets/images/luis.jpg',
        description: 'Mi nombre es Luis Andrés, soy una persona súper alegre, que agradece y disfruta de cada minuto de vida, me apasiona el poder, a través de una abstracción, plasmar la solución a un problema y tener la capacidad de hacerla realidad con ayuda de mis compañeros.',
        title: 'Luis Andrés MArtinez Estremor'
      },
      {
        imageUrl: '../assets/images/juli.jpg',
        description: '¡Hola a todos! Soy una persona muy alegre, me encanta reír y hacer reír a las personas que me rodean. Si se preguntan cómo llegué a este equipo, fue pura coincidiencia, y gracias a esto encontré mi lugar en el mundo. Amo a mi equipo y amo lo que hacemos.',
        title: 'Juliana Gómez Galindo'
      },
      {
        imageUrl: '../assets/images/yair.jpg',
        description: 'Mi nombre es Yair, tengo 21 años y soy un apasionado de los videojuegos, lo que me llevó eventualmente al área de la tecnología donde mis mayores fortalezas son mi razonamiento lógico y la dedicación que pongo en todo lo que hago.',
        title: 'Yair Camilo Sánchez Bulla'
      },
      {
        imageUrl: '../assets/images/zapa.jpg',
        description: '¡Hola!, soy una persona que siempre se ha visto fascinada por el mundo virtual y tecnológico, gracias a esto las personas que me conocen siempre acuden a mi para que les solucione sus problemas tecnológicos, eso me ha traído hasta ArchiTech.',
        title: 'Juan David Zapata'
      }
    ]
  }

}
