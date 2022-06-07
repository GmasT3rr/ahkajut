import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { CrearQuizComponent } from './components/crear-quiz/crear-quiz.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegistroComponent},
  {path:'home', component: HomeComponent},
  {path:'preguntas', component: PreguntasComponent},
  {path:'crear-Quiz', component: CrearQuizComponent},

  {path: '**', pathMatch:'full', redirectTo:'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
