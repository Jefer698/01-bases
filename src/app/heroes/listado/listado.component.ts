import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
    heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
    heroeBorradoArray: string = '';

    borrarHeroe(){
     // return this.heroeBorradoArray.push(`${heroeBorrado}, `);
     return this.heroeBorradoArray = this.heroes.shift() || '';

    }



  }

