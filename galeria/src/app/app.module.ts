import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';  // Aquí es donde agregamos provideHttpClient
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { LogComponent } from './log/log.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { ErrorComponent } from './error/error.component';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';
import { RegistroComponent } from './registro/registro.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ResumenPedidoComponent } from './resumen-pedido/resumen-pedido.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardProductsComponent } from './dashboard-products/dashboard-products.component';
import { CarouselPromocionesComponent } from './carousel-promociones/carousel-promociones.component';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    HomePageComponent,
    SidebarComponent,
    GaleriaComponent,
    LogComponent,
    UsuarioComponent,
    ProductoComponent,
    ErrorComponent,
    AvisoPrivacidadComponent,
    TerminosCondicionesComponent,
    RegistroComponent,
    CheckoutComponent,
    CarritoComponent,
    ResumenPedidoComponent,
    ConfirmacionComponent,
    DashboardComponent,
    DashboardProductsComponent,
    CarouselPromocionesComponent,
    MensajesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Esto es necesario para ngModel
  ],
  providers: [
    provideHttpClient(),  // Aquí se usa provideHttpClient en lugar de HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }