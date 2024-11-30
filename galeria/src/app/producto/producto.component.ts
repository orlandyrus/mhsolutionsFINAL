import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../carrito.service'; // Importa el servicio

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  producto: any; // Objeto para almacenar los detalles del producto
  quantity: number = 1; // Cantidad seleccionada por el usuario
  showError: boolean = false; // Controla si se muestra un mensaje de error
  productosRelacionados: any[] = []; // Productos relacionados basados en la categoría

  showPopup: boolean = false; // Controla la visibilidad del pop-up

  // Mostrar el pop-up por 3 segundos
  displayPopup(): void {
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 3000);
  }

  // Array de productos para buscar el producto seleccionado
  productos = [
    {
      nombre: 'Taladro Inalámbrico',
      categoria: 'herramientas',
      precio: '$1,200.00',
      imagen:
        'https://www.tooltown.mx/cdn/shop/files/ROTI-20A_FC2.jpg?v=1719424181&width=1800',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam eos recusandae, reprehenderit quas libero. Neque rem, voluptates quo consequatur eum, labore numquam culpa quidem, obcaecati quod blanditiis officiis quasi ratione! Quibusdam ut quos iste laudantium ad vitae rerum repellat? Ratione labore doloribus voluptas vero nam inventore necessitatibus quo repudiandae fugiat nobis, voluptatum cum nesciunt quaerat unde recusandae maiores consequuntur eius laboriosam mollitia. Ipsum in quis consequatur quasi fuga distinctio tempora alias architecto. Tempora, a molestiae! Eveniet, nesciunt sequi? Inventore illo eius voluptatibus velit esse sed officiis ratione, possimus placeat iusto dolorem porro natus, totam minus! Perferendis corporis sapiente neque.'
    },
    
    {
      nombre: 'Sierra Circular',
      categoria: 'herramientas',
      precio: '$850.00',
      imagen: 'https://tiendamakita.com/8036-large_default/sierra-circular-7-14-pulgadas-1800w-makita-5007n.jpg',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam eos recusandae, reprehenderit quas libero. Neque rem, voluptates quo consequatur eum, labore numquam culpa quidem, obcaecati quod blanditiis officiis quasi ratione! Quibusdam ut quos iste laudantium ad vitae rerum repellat? Ratione labore doloribus voluptas vero nam inventore necessitatibus quo repudiandae fugiat nobis, voluptatum cum nesciunt quaerat unde recusandae maiores consequuntur eius laboriosam mollitia. Ipsum in quis consequatur quasi fuga distinctio tempora alias architecto. Tempora, a molestiae! Eveniet, nesciunt sequi? Inventore illo eius voluptatibus velit esse sed officiis ratione, possimus placeat iusto dolorem porro natus, totam minus! Perferendis corporis sapiente neque.'
    },
    {
      nombre: 'Juego de Llaves Allen',
      categoria: 'herramientas',
      precio: '$300.00',
      imagen: 'https://www.toolferreterias.com/cdn/shop/products/234910030-1_0453bc46-db5a-49a0-a2a9-c57d823b9ca7.jpg?v=1707335649',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam eos recusandae, reprehenderit quas libero. Neque rem, voluptates quo consequatur eum, labore numquam culpa quidem, obcaecati quod blanditiis officiis quasi ratione! Quibusdam ut quos iste laudantium ad vitae rerum repellat? Ratione labore doloribus voluptas vero nam inventore necessitatibus quo repudiandae fugiat nobis, voluptatum cum nesciunt quaerat unde recusandae maiores consequuntur eius laboriosam mollitia. Ipsum in quis consequatur quasi fuga distinctio tempora alias architecto. Tempora, a molestiae! Eveniet, nesciunt sequi? Inventore illo eius voluptatibus velit esse sed officiis ratione, possimus placeat iusto dolorem porro natus, totam minus! Perferendis corporis sapiente neque.'
    },
    {
      nombre: 'Martillo',
      categoria: 'herramientas',
      precio: '$50',
      imagen: 'https://cdn.homedepot.com.mx/productos/449645/449645-d.jpg',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam eos recusandae, reprehenderit quas libero. Neque rem, voluptates quo consequatur eum, labore numquam culpa quidem, obcaecati quod blanditiis officiis quasi ratione! Quibusdam ut quos iste laudantium ad vitae rerum repellat? Ratione labore doloribus voluptas vero nam inventore necessitatibus quo repudiandae fugiat nobis, voluptatum cum nesciunt quaerat unde recusandae maiores consequuntur eius laboriosam mollitia. Ipsum in quis consequatur quasi fuga distinctio tempora alias architecto. Tempora, a molestiae! Eveniet, nesciunt sequi? Inventore illo eius voluptatibus velit esse sed officiis ratione, possimus placeat iusto dolorem porro natus, totam minus! Perferendis corporis sapiente neque.'
    },
    {
      nombre: 'Sierra',
      categoria: 'herramientas',
      precio: '$200',
      imagen: 'https://image.made-in-china.com/2f0j00vEkYVaqhZNbd/Hand-Garden-Tools-Wood-Handle-Handsaw.webp',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam eos recusandae, reprehenderit quas libero. Neque rem, voluptates quo consequatur eum, labore numquam culpa quidem, obcaecati quod blanditiis officiis quasi ratione! Quibusdam ut quos iste laudantium ad vitae rerum repellat? Ratione labore doloribus voluptas vero nam inventore necessitatibus quo repudiandae fugiat nobis, voluptatum cum nesciunt quaerat unde recusandae maiores consequuntur eius laboriosam mollitia. Ipsum in quis consequatur quasi fuga distinctio tempora alias architecto. Tempora, a molestiae! Eveniet, nesciunt sequi? Inventore illo eius voluptatibus velit esse sed officiis ratione, possimus placeat iusto dolorem porro natus, totam minus! Perferendis corporis sapiente neque.'
    },
    //producros de industria
    {
      nombre: 'Cinta Transportadora',
      categoria: 'industria',
      precio: '$12,500.00',
      imagen:'https://www.elettronicaveneta.com/wp-content/uploads/2019/10/26D-MCE-700.jpg',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam eos recusandae, reprehenderit quas libero. Neque rem, voluptates quo consequatur eum, labore numquam culpa quidem, obcaecati quod blanditiis officiis quasi ratione! Quibusdam ut quos iste laudantium ad vitae rerum repellat? Ratione labore doloribus voluptas vero nam inventore necessitatibus quo repudiandae fugiat nobis, voluptatum cum nesciunt quaerat unde recusandae maiores consequuntur eius laboriosam mollitia. Ipsum in quis consequatur quasi fuga distinctio tempora alias architecto. Tempora, a molestiae! Eveniet, nesciunt sequi? Inventore illo eius voluptatibus velit esse sed officiis ratione, possimus placeat iusto dolorem porro natus, totam minus! Perferendis corporis sapiente neque.'
    },
    {
      nombre: 'Soldadora MIG',
      categoria: 'industria',
      precio: '$8,900.00',
      imagen: 'https://maraga.vtexassets.com/arquivos/ids/271691/MIG-350A-Iso---feeder.jpg?v=637907408554470000',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam eos recusandae, reprehenderit quas libero. Neque rem, voluptates quo consequatur eum, labore numquam culpa quidem, obcaecati quod blanditiis officiis quasi ratione! Quibusdam ut quos iste laudantium ad vitae rerum repellat? Ratione labore doloribus voluptas vero nam inventore necessitatibus quo repudiandae fugiat nobis, voluptatum cum nesciunt quaerat unde recusandae maiores consequuntur eius laboriosam mollitia. Ipsum in quis consequatur quasi fuga distinctio tempora alias architecto. Tempora, a molestiae! Eveniet, nesciunt sequi? Inventore illo eius voluptatibus velit esse sed officiis ratione, possimus placeat iusto dolorem porro natus, totam minus! Perferendis corporis sapiente neque.'
    },
    {
      nombre: 'Generador Eléctrico',
      categoria: 'industria',
      precio: '$7,300.00',
      imagen: 'https://torotrac.com/cdn/shop/files/PS0001163-1_700x700.jpg?v=1711835526',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam eos recusandae, reprehenderit quas libero. Neque rem, voluptates quo consequatur eum, labore numquam culpa quidem, obcaecati quod blanditiis officiis quasi ratione! Quibusdam ut quos iste laudantium ad vitae rerum repellat? Ratione labore doloribus voluptas vero nam inventore necessitatibus quo repudiandae fugiat nobis, voluptatum cum nesciunt quaerat unde recusandae maiores consequuntur eius laboriosam mollitia. Ipsum in quis consequatur quasi fuga distinctio tempora alias architecto. Tempora, a molestiae! Eveniet, nesciunt sequi? Inventore illo eius voluptatibus velit esse sed officiis ratione, possimus placeat iusto dolorem porro natus, totam minus! Perferendis corporis sapiente neque.'
    },
    {
      nombre: 'Tanque de Aire Comprimido',
      categoria: 'industria',
      precio: '$5,000.00',
      imagen: 'https://m.media-amazon.com/images/I/71Nm7l6PwUL._AC_UF1000,1000_QL80_.jpg',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam eos recusandae, reprehenderit quas libero. Neque rem, voluptates quo consequatur eum, labore numquam culpa quidem, obcaecati quod blanditiis officiis quasi ratione! Quibusdam ut quos iste laudantium ad vitae rerum repellat? Ratione labore doloribus voluptas vero nam inventore necessitatibus quo repudiandae fugiat nobis, voluptatum cum nesciunt quaerat unde recusandae maiores consequuntur eius laboriosam mollitia. Ipsum in quis consequatur quasi fuga distinctio tempora alias architecto. Tempora, a molestiae! Eveniet, nesciunt sequi? Inventore illo eius voluptatibus velit esse sed officiis ratione, possimus placeat iusto dolorem porro natus, totam minus! Perferendis corporis sapiente neque.'
    },
    {
      nombre: 'Taladro',
      categoria: 'industria',
      precio: '$150',
      imagen: 'https://www.knova.com.mx/products/13052@3x.jpg',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam eos recusandae, reprehenderit quas libero. Neque rem, voluptates quo consequatur eum, labore numquam culpa quidem, obcaecati quod blanditiis officiis quasi ratione! Quibusdam ut quos iste laudantium ad vitae rerum repellat? Ratione labore doloribus voluptas vero nam inventore necessitatibus quo repudiandae fugiat nobis, voluptatum cum nesciunt quaerat unde recusandae maiores consequuntur eius laboriosam mollitia. Ipsum in quis consequatur quasi fuga distinctio tempora alias architecto. Tempora, a molestiae! Eveniet, nesciunt sequi? Inventore illo eius voluptatibus velit esse sed officiis ratione, possimus placeat iusto dolorem porro natus, totam minus! Perferendis corporis sapiente neque.'
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

  constructor(
    private route: ActivatedRoute,
    private carritoService: CarritoService // Inyecta el servicio del carrito
  ) {}

  ngOnInit(): void {
    // Suscribirse a los cambios en los parámetros de la ruta
    this.route.paramMap.subscribe((params) => {
      const productName = params.get('name'); // Obtener el parámetro "name" de la ruta
      this.producto = this.productos.find((prod) => prod.nombre === productName);
  
      if (!this.producto) {
        console.error('Producto no encontrado:', productName);
      } else {
        // Filtrar los productos relacionados por la misma categoría
        this.productosRelacionados = this.productos.filter(
          (prod) =>
            prod.categoria === this.producto.categoria &&
            prod.nombre !== this.producto.nombre
        );
      }
    });
  }
  

  addToCart(): void {
    if (this.quantity <= 0 || !Number.isInteger(this.quantity)) {
      this.showError = true; // Mostrar error si la cantidad es inválida
    } else {
      this.showError = false;
  
      const productToAdd = {
        name: this.producto.nombre,
        category: this.producto.categoria,
        price: parseFloat(this.producto.precio.replace('$', '').replace(',', '')),
        quantity: this.quantity,
        imageUrl: this.producto.imagen,
      };
  
      this.carritoService.addToCart(productToAdd);
      this.displayPopup(); // Mostrar pop-up de confirmación
      console.log('Producto agregado al carrito:', productToAdd);
    }
  }
  
  addToCartFromRelated(product: any): void {
    const productToAdd = {
      name: product.nombre,
      category: product.categoria,
      price: parseFloat(product.precio.replace('$', '').replace(',', '')),
      quantity: 1,
      imageUrl: product.imagen,
    };
  
    this.carritoService.addToCart(productToAdd);
    this.displayPopup(); // Mostrar pop-up de confirmación
    console.log('Producto agregado desde relacionados:', productToAdd);
  }
 }