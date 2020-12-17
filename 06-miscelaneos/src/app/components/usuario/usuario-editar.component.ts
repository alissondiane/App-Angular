import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario- {{id}} works!

    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  id:string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.id=params['id'];
    })
  }


  ngOnInit(): void {
  }

}
