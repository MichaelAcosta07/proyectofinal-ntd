import { DetalleComponent } from './components/detalle/detalle.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PagoComponent } from './components/pago/pago.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
   {path: 'login', component: LoginComponent},
   {path: 'registro', component: RegistroComponent},
   {path: 'productos', component: ProductosComponent},
   {path: 'pago', component: PagoComponent},
   {path: 'carrito', component: CarritoComponent},
   {path: 'detalle', component: DetalleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
