import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizModel } from 'src/app/interfaces/quiz';
// declare global {
//   interface Navigator {
//     msSaveOrOpenBlob: (blobOrBase64: Blob | string, filename: string) => void
//   }
// }
@Component({
  selector: 'app-crear-quiz',
  templateUrl: './crear-quiz.component.html',
  styleUrls: ['./crear-quiz.component.css']
})
export class CrearQuizComponent implements OnInit {
  @ViewChild('myForm', {static: true}) form!: NgForm;


  expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    dni: /^\d{8,8}$/, // 7 a 14 numeros.
    numero: /^\d{7,14}$/, // 7 a 14 numeros.
}
  createFormGroup(){
    return new FormGroup({
      titulo:new FormControl('',[Validators.required,Validators.pattern(this.expresiones.nombre)]),
      respuesta1:new FormControl('',[Validators.required,Validators.pattern(this.expresiones.nombre)]),
      respuesta2:new FormControl('',[Validators.required,Validators.pattern(this.expresiones.nombre)]),
      respuesta3:new FormControl('',[Validators.required,Validators.pattern(this.expresiones.nombre)]),
      respuesta4:new FormControl('',[Validators.required,Validators.pattern(this.expresiones.nombre)]),
      respCorrecta:new FormControl('',[Validators.required]),

    })
  }
  public quiz:FormGroup;
  public respuestaCorrecta:String = ""
  cuestionario: QuizModel;
  datos!:any
  respuestas: string[]=[]
  

  constructor(private rt:Router) {
    this.quiz = this.createFormGroup();
    this.cuestionario = new QuizModel();
   }


  ngOnInit(): void {
  }
  onSubmit(){
    this.guardarQuiz();
  }

  guardarQuiz() {
  this.cuestionario = this.quiz.value
  console.log(this.cuestionario)
  localStorage.setItem("cuestionario",JSON.stringify(this.cuestionario))
  }

  guardarRes1(){
    let res=this.resp1?.value
    if(res != ""){
      this.respuestas.push(res)
    }
  }
  guardarRes2(){
    let res=this.resp2?.value
    if(res != ""){
      this.respuestas.push(res)
    }
  }
  guardarRes3(){
    let res=this.resp3?.value
    if(res != ""){
      this.respuestas.push(res)
    }
  }
  guardarRes4(){
    let res=this.resp4?.value
    if(res != ""){
      this.respuestas.push(res)
    }
  }


  verRespuestas() {
    this.cuestionario = this.quiz.value
    this.respuestaCorrecta = this.correcta?.value;
    console.log(this.cuestionario)
    console.log(this.respuestas)
    console.log(this.respuestaCorrecta)
  }

  get resp1(){return this.quiz.get('respuesta1') }
  get resp2(){return this.quiz.get('respuesta2') }
  get resp3(){return this.quiz.get('respuesta3') }
  get resp4(){return this.quiz.get('respuesta4') }
  get correcta(){return this.quiz.get('respCorrecta') }

  get rs(){return this.respuestas}

}
