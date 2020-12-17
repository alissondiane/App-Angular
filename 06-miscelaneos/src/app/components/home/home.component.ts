import { Component, OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
 <app-clases></app-clases>
 
 <p [appResaltado]="color">
   Hola Mundo
 </p>
 <button (click)="color='red'" class="btn btn-danger" type="button">RED</button>
 <button (click)="color='blue'" class="btn btn-primary" type="button">BLUE</button>
 <br>
 <app-ng-switch></app-ng-switch> 
 
 `,
  styles: []
})
export class HomeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  color:string="orange";
  constructor() {
    console.log("constructor");
   }

  ngOnInit(){
    console.log("ngOnInit");
  }
  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}
