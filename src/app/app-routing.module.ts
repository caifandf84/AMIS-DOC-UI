import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AltaComponent } from './components/usuario/alta/alta.component';
import { UsuarioConsultaComponent } from './components/usuario/consulta/consulta.component';
import { PlantillaComponent } from './components/configuracion/plantilla/plantilla.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ProcesoComponent } from './components/proceso/proceso.component';

const routes: Routes = [
  {
    path:'usuario/alta',
    component: AltaComponent
  },
  {
    path:'usuario/consulta',
    component: UsuarioConsultaComponent
  },
  {
    path:'configuracion/plantilla',
    component: PlantillaComponent
  },
  {
    path:'consulta',
    component: ConsultaComponent
  },
  {
    path:'proceso',
    component: ProcesoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
