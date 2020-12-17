import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
      {{ide}}
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {
  ide:string;
  constructor(private activatedRoute: ActivatedRoute) {
      this.activatedRoute.parent.params.subscribe(params => {
        console.log("RUTA PADRE")
        console.log(params['ide']);
        this.ide = params['ide'];
      })
    }

  ngOnInit(): void {
  }

}
