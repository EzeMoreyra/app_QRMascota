import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})

export class IntroPage implements OnInit {

private readonly MOSTRAR_INTRO = 'mostrarIntro'; // Constante para la clave de almacenamiento

swiperSlideChanged($event: CustomEvent<[swiper: import("swiper/types").Swiper]>) {
throw new Error('Method not implemented.');
}

  slides = [
    {
    imageSrc:"assets/img/logo.png",
    imageAlt:"Logo Aplicacion",
    titulo:"Encuentralos a todos campeón",
    subtitulo:"En cualquier lugar",
    descripcion: "Juntos podemos lograrlo. No estás solo en esta búsqueda.",
  },
   {
    imageSrc:"assets/img/Slide2_Home.png",
    imageAlt:"Slide2_Home",
    titulo:"Dales refugio",
    subtitulo:"Ayúdanos a encontrar a nuestro compañero de aventuras",
    descripcion: "Un hogar no es un hogar sin su mascota.",

  },
  {
    imageSrc:"assets/img/Slide3_Home.png",
    imageAlt:"Slide3_Home",
    titulo:"Reencontralos con sus dueños",
    subtitulo:"Usa la app y reencontra a la cada mascota con su dueño",
    descripcion: "¡La felicidad es una mascota que vuelve a casa!.",

  }]

  constructor(private router: Router, private storage: Storage) {}

  async finish() {
    await this.storage.set(this.MOSTRAR_INTRO, true);
    this.router.navigateByUrl('/home');
  }

  async ngOnInit() {
    await this.storage.create(); // Crea la base de datos de almacenamiento

    // Comprueba si el intro ya se ha mostrado
    const hasShownIntro = await this.storage.get(this.MOSTRAR_INTRO);
    if (hasShownIntro) {
      this.router.navigateByUrl('/home'); // Redirecciona si ya se ha mostrado
    }
  }
}
