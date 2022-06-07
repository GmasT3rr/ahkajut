import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rt:Router) { }

  ngOnInit(): void {
  }

  irPreguntas(){
    this.rt.navigateByUrl('/preguntas')
  }
  irCrearQuiz(){
    this.rt.navigateByUrl('/crear-Quiz')

  }

}
