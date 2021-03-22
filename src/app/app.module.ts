import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TemarioComponent } from './temario/temario.component';
import { TemarioLeccionComponent } from './temario/temario-leccion/temario-leccion.component';
import { LeccionComponent } from './leccion/leccion.component';
import { LeccionesVistasPipe } from './lecciones-vistas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TemarioComponent,
    TemarioLeccionComponent,
    LeccionComponent,
    LeccionesVistasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
