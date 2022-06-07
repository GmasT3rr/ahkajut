import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './headers/header/header.component';
import { FooterComponent } from './footers/footer/footer.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { CrearQuizComponent } from './components/crear-quiz/crear-quiz.component';

import { ReactiveFormsModule} from '@angular/forms';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component'
import { HttpClientModule } from '@angular/common/http';
import { RespuestasBgDirective } from './respuestas-bg.directive';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PreguntasComponent,
    CrearQuizComponent,
    RegistroComponent,
    LoginComponent,
    RespuestasBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CrearQuizComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
