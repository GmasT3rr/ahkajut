import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @ViewChild ('user') user!:ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  guardarUsuario(){
    localStorage.setItem("usuario", this.user.nativeElement.value)
  }

}
