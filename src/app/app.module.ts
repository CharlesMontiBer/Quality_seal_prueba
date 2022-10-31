import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { DisenioComponent } from './components/disenio/disenio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductoComponent,
    ClasificacionComponent,
    PromocionesComponent,
    DisenioComponent,
    ContactoComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
