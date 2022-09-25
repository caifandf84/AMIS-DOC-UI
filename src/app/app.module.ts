import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { AltaComponent } from './components/usuario/alta/alta.component';
import { UsuarioConsultaComponent } from './components/usuario/consulta/consulta.component';
import { PlantillaComponent } from './components/configuracion/plantilla/plantilla.component';
import { ProcesoComponent } from './components/proceso/proceso.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    AltaComponent,
    UsuarioConsultaComponent,
    PlantillaComponent,
    ProcesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
