import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeccionComponent } from './leccion/leccion.component';
import { TemarioLeccionComponent } from './temario/temario-leccion/temario-leccion.component';
import { TemarioComponent } from './temario/temario.component';


const routes: Routes = [
  {path: '', redirectTo: '/temario', pathMatch:'full'},
  {path: 'temario', component: TemarioComponent}, 
  {path: 'temario/:id', component: TemarioLeccionComponent},
  {path: 'leccion/:id', component: LeccionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
