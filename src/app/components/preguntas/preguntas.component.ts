import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntasService } from 'src/app/services/preguntas.service';
import { CrearQuizComponent } from '../crear-quiz/crear-quiz.component';
import { interval } from 'rxjs';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  public user:string = "";
  public quiz:any =[];
  public pregActual:number = 0;
  public puntos:number = 0;
  quizCompletado:boolean = false;
  pb:string="0"
  respCorrectas:number = 0;
  respIncorrectas:number = 0;
  contador:number = 100;
  interval$:any;

  

  cuestionario:any
  respuestas: string[]=[]


  constructor(private rt:Router, private qz:CrearQuizComponent,private qs:PreguntasService) {
  // this.cuestionario = localStorage.getItem("cuestionario")
  // this.quiz = JSON.parse(this.cuestionario)
  }

  ngOnInit(): void {
    this.getName()
    this.getQuestionario()
    this.empezarContador()
    // this.obtenerResp()
  }

  getName(){
    this.user = localStorage.getItem("usuario")!; 
  }
  getQuestionario(){
  this.qs.getCuestionarioJSON().subscribe(res =>{
  this.quiz = res.preguntas
  })
  }
  getPBar(){
    this.pb = ((this.pregActual/this.quiz.length)*100).toString()
    return this.pb;
  }

  pregAnterior(){
    this.pregActual--;
    this.getPBar()
  }
  pregSiguiente(){
    this.pregActual++;
    this.getPBar()
    if(this.pregActual === this.quiz.length){
      this.quizCompletado = true;
      this.detenerContador();
    }
  }
  pregReset(){
    this.resetearContador();
    this.getQuestionario();
    this.puntos = 0;
    this.contador=100;
  }


  irHome(){
    this.rt.navigateByUrl('/home')
  }

  correcta(pregActual:number,opcion:any){
    if(pregActual === this.quiz.length){
      this.quizCompletado = true;
      this.detenerContador();
    }
    if(opcion.correct){
      this.puntos +=10;
      this.respCorrectas ++;
      setTimeout(() => {
        this.pregActual++;
        this.contador=100;
        this.getPBar()
        }, 250);
    } else{
        setTimeout(() => {
          this.pregActual++;
          this.respIncorrectas ++;
          this.contador=100;
          this.getPBar()
        }, 250);
        this.puntos -=10;
    }
  }

  empezarContador(){
    this.interval$ = interval(1000)
    .subscribe(tiempo=>{
      this.contador--;
      if(this.contador===0){
        this.pregActual++;
        this.respIncorrectas ++;
        this.contador=100;
        this.puntos -=10;
      }
    }); setTimeout(() => {
      this.interval$.unsubscribe()
    }, 100000);
  }
  detenerContador(){
    this.interval$.unsubscribe()
    this.contador=0;
  }
  resetearContador(){
    this.pregActual = 0;
    this.detenerContador();
    this.contador=100;
    this.empezarContador();
    this.getPBar()
  }




  // obtenerResp(){
  //   this.respuestas.push(this.quiz.respuesta1)
  //   this.respuestas.push(this.quiz.respuesta2)
  //   this.respuestas.push(this.quiz.respuesta3)
  //   this.respuestas.push(this.quiz.respuesta4)

  // }

  // seleccionar(){
  //   console.log("funca")
  //   let r = this.quiz.respCorrecta

  // }

}
