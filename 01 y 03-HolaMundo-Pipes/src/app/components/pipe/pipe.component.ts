import { Component} from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent{
  nombre:string="Capitán América";
  nombre2:string="AlissOn DianE ArtEagA qUiCo";
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  porcentaje:number=0.235;
  salario:number=1235.5;
  fecha:Date = new Date();
  activar:boolean=true;
  idioma: string='en';
  videoUrl:string="https://www.youtube.com/embed/76kIXmLX-Y0";

  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve('Llego la data');
    },4500);
  })
  heroe = {
    nombre:'Logan',
    clave:'Wolwerine',
    edad:500,
    direccion:{
      calle:'Primera'
    }
  }
  constructor() { }

  

}
