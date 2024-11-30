import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-promociones',
  templateUrl: './carousel-promociones.component.html',
  styleUrls: ['./carousel-promociones.component.css'],
})
export class CarouselPromocionesComponent {
  promociones = [
    {
      imagen: '/promo7.jpg',
      titulo: 'Oferta Especial Tecnología',
      descripcion: 'Descuento del 20% en Tecnología',
    },
    {
      imagen: '/promo3.jpg',
      titulo: 'Promoción Industrial',
      descripcion: 'Equipamiento industrial con 15% off',
    },
    {
      imagen: '/promo10.png',
      titulo: 'Oferta Herramientas',
      descripcion: 'Descuento del 20% en herramientas',
    },
    {
      imagen: '/promo11.png',
      titulo: 'Descuentos Oficina',
      descripcion: 'Descuento del 20% en Artículos de Oficina',
    },
  ];

  activeIndex = 0;
  interval: any;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Cambia la imagen cada 3 segundos
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.promociones.length;
  }

  prevSlide() {
    this.activeIndex =
      (this.activeIndex - 1 + this.promociones.length) % this.promociones.length;
  }

  setActive(index: number) {
    this.activeIndex = index;
    clearInterval(this.interval); // Pausa el autoplay al seleccionar manualmente
    this.startCarousel(); // Reinicia el autoplay
  }
}