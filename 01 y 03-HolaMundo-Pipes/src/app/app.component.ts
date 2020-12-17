import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrar:boolean=false;
  nombre="Alisson";
  apellido="Arteaga"

  mostrarComponents(){
    this.mostrar = !this.mostrar;
  }
}
