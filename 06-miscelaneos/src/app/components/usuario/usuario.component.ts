import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {
  ide:string;

  constructor(private router:Router,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(params => {
        console.log("RUTA PADRE")
        console.log(params['ide']);
      })
    }

  ngOnInit(): void {
  }

  enviarId(){
    this.router.navigate(['usuario/editar',10]);
  }
}
