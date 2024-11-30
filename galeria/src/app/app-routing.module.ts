import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { LogComponent } from './log/log.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { ErrorComponent } from './error/error.component';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';
import { RegistroComponent } from './registro/registro.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ResumenPedidoComponent } from './resumen-pedido/resumen-pedido.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardProductsComponent } from './dashboard-products/dashboard-products.component';
import { MensajesComponent } from './mensajes/mensajes.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, // Página principal
  { path: 'contacto', component: ContactoComponent }, // Componente de contacto
  { path: 'galeria', component: GaleriaComponent }, // Componente de galería
  { path: 'log', component: LogComponent }, // Componente de log in/log out
  { path: 'registro', component: RegistroComponent }, // Componente de registro
  { path: 'perfil', component: UsuarioComponent }, // Componente de perfil
  { path: 'galeria/producto/:name', component: ProductoComponent },  // Ruta dinámica para productos
  { path: 'aviso-privacidad', component: AvisoPrivacidadComponent }, // Componente de avisos de privacidad
  { path: 'terminos-condiciones', component: TerminosCondicionesComponent }, // Componente de términos y condiciones
  { path: 'carrito', component: CarritoComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'resumen-pedido', component: ResumenPedidoComponent},
  { path: 'confirmacion', component: ConfirmacionComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard-productos', component: DashboardProductsComponent},
  {path: 'mensajes', component: MensajesComponent},
  { path: '**', component: ErrorComponent } // Ruta comodín para página de error 404
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
