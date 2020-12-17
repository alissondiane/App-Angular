import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar:boolean = true): string {

    console.log(value);
    return (mostrar)? '*'.repeat(value.length) :value;
  }

}
