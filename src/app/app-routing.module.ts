import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DisenioComponent } from './components/disenio/disenio.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PromocionesComponent } from './components/promociones/promociones.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'producto', component:ProductoComponent},
  {path: 'clasificacion', component:ClasificacionComponent},
  {path: 'promociones', component:PromocionesComponent},
  {path: 'disenio', component:DisenioComponent},
  {path: 'contacto', component:ContactoComponent},
  {path:'**', pathMatch:'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
