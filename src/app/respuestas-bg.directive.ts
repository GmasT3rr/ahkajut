import { Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';
import { Input, ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appRespuestasBg]'
})
export class RespuestasBgDirective {

  @Input() correcta:Boolean = false;
  constructor(private ef:ElementRef, private render:Renderer2) { }

  @HostListener('click') respuesta(){
    if(this.correcta){
      this.render.setStyle(this.ef.nativeElement,'background','green')
    }else{
      this.render.setStyle(this.ef.nativeElement,'background','red')

    }
  }

}
