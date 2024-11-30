import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { CarritoService } from '../carrito.service';

interface Producto {
  nombre: string;
  categoria: string;
  precio: string;
  imagen: string;
}

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  productos: Producto[] = [
    {
      nombre: 'Taladro Inalámbrico',
      categoria: 'herramientas',
      precio: '$1,200.00',
      imagen:
        'https://www.tooltown.mx/cdn/shop/files/ROTI-20A_FC2.jpg?v=1719424181&width=1800',
    },
    {
      nombre: 'Sierra Circular',
      categoria: 'herramientas',
      precio: '$850.00',
      imagen: 'https://tiendamakita.com/8036-large_default/sierra-circular-7-14-pulgadas-1800w-makita-5007n.jpg',
    },
    {
      nombre: 'Juego de Llaves Allen',
      categoria: 'herramientas',
      precio: '$300.00',
      imagen: 'https://www.toolferreterias.com/cdn/shop/products/234910030-1_0453bc46-db5a-49a0-a2a9-c57d823b9ca7.jpg?v=1707335649',
    },
    {
      nombre: 'Martillo',
      categoria: 'herramientas',
      precio: '$50',
      imagen: 'https://cdn.homedepot.com.mx/productos/449645/449645-d.jpg',
    },
    {
      nombre: 'Sierra',
      categoria: 'herramientas',
      precio: '$200',
      imagen: 'https://image.made-in-china.com/2f0j00vEkYVaqhZNbd/Hand-Garden-Tools-Wood-Handle-Handsaw.webp',
    },
    //producros de industria
    {
      nombre: 'Cinta Transportadora',
      categoria: 'industria',
      precio: '$12,500.00',
      imagen:'https://www.elettronicaveneta.com/wp-content/uploads/2019/10/26D-MCE-700.jpg',
    },
    {
      nombre: 'Soldadora MIG',
      categoria: 'industria',
      precio: '$8,900.00',
      imagen: 'https://maraga.vtexassets.com/arquivos/ids/271691/MIG-350A-Iso---feeder.jpg?v=637907408554470000',
    },
    {
      nombre: 'Generador Eléctrico',
      categoria: 'industria',
      precio: '$7,300.00',
      imagen: 'https://torotrac.com/cdn/shop/files/PS0001163-1_700x700.jpg?v=1711835526',
    },
    {
      nombre: 'Tanque de Aire Comprimido',
      categoria: 'industria',
      precio: '$5,000.00',
      imagen: 'https://m.media-amazon.com/images/I/71Nm7l6PwUL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      nombre: 'Taladro',
      categoria: 'industria',
      precio: '$150',
      imagen: 'https://www.knova.com.mx/products/13052@3x.jpg',
    },
    //productos de tecnologia
    {
      nombre: 'Smartphone 5G',
      categoria: 'tecnologia',
      precio: '$1200',
      imagen: 'https://lamarinamx.vtexassets.com/arquivos/ids/1068921-800-800?v=638646912642300000&width=800&height=800&aspect=true',
    },
    {
      nombre: 'Smartwatch',
      categoria: 'tecnologia',
      precio: '$1200',
      imagen: 'https://ss632.liverpool.com.mx/xl/1157529281.jpg',
    },
    {
      nombre: 'Audífonos ',
      categoria: 'tecnologia',
      precio: '$1200',
      imagen: 'https://www.redlemon.com.mx/cdn/shop/products/00_fb366e74-0aeb-4191-baba-992a8062f536.jpg?v=1716240799',
    },
    {
      nombre: 'Router ',
      categoria: 'tecnologia',
      precio: '$1200',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1g_qeoRpO3VQje3eESl5e0RK5pvFA6jWE3g&s',
    },
    {
      nombre: 'Laptop',
      categoria: 'tecnologia',
      precio: '$1200',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_640104-MLU72721294581_112023-O.webp',
    },
    //productos de ofina
    {
      nombre: 'Silla Ejecutiva',
      categoria: 'oficina',
      precio: '$1,800.00',
      imagen:
        'https://i5.walmartimages.com/asr/1440e502-97e5-4696-a12f-16d02698b56c.a4a811c1ec9fa37cd80ee7ee867921d2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    },
    {
      nombre: 'Impresora ',
      categoria: 'oficina',
      precio: '$3,200.00',
      imagen: 'https://i5.walmartimages.com.mx/samsmx/images/product-images/img_large/980034059l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    },
    {
      nombre: 'Escritorio',
      categoria: 'oficina',
      precio: '$300',
      imagen: 'https://img.uline.com/is/image/uline/H-9780?$Mobile_SI$',
    },
    {
      nombre: 'Portalápices ',
      categoria: 'oficina',
      precio: '$300',
      imagen: 'https://arteztik.com/cdn/shop/products/51KNcXoViWL._UL1500_1024x1024@2x.jpg?v=1610756959',
    },
    {
      nombre: 'Set de notas',
      categoria: 'oficina',
      precio: '$300',
      imagen: 'https://m.media-amazon.com/images/I/71GHfEh25aL.jpg',
    },

  ];
  
  productosFiltrados = this.productos; // Inicialmente muestra todos los productos
  selectedCategory: string = ''; // Categoría seleccionada por el usuario
  mensajeAlerta: string = ''; // Mensaje de alerta para el carrito

  constructor(private carritoService: CarritoService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Animaciones en las tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      let timeout: any;

      card.addEventListener('mouseenter', () => {
        timeout = setTimeout(() => {
          card.classList.add('animate-hover');
        }, 300);
      });

      card.addEventListener('mouseleave', () => {
        clearTimeout(timeout);
        card.classList.remove('animate-hover');
      });
    });
  }

  seleccionarCategoria(categoria: string): void {
    this.selectedCategory = categoria;
  }

  filtrarCategoria(categoria: string): void {
    this.productosFiltrados = categoria
      ? this.productos.filter((producto) => producto.categoria === categoria)
      : this.productos;
  }

  agregarAlCarrito(producto: any): void {
    const productToAdd = {
      name: producto.nombre,
      category: producto.categoria,
      price: parseFloat(producto.precio.replace('$', '').replace(',', '')),
      quantity: 1,
      imageUrl: producto.imagen,
    };
  
    // Agrega al carrito utilizando el servicio
    this.carritoService.addToCart(productToAdd);
  
    // Mostrar el mensaje en el pop-up
    this.mensajeAlerta = `${producto.nombre} se ha agregado al carrito`;
  
    // Ocultar el pop-up después de 3 segundos
    setTimeout(() => {
      this.mensajeAlerta = '';
    }, 3000);
  }
  
  
}