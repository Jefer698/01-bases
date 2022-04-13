import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Mestro Roshi',
    poder: 1000
  }


  // agregarNuevoPersonaje(argumento: Personaje) {
  //   this.DbzService.personajes.push( argumento );
  // }
  // // // cambiarNombre(event: any){
  // // //   console.log(event.target.value)
  // // }
  constructor(){}

}
