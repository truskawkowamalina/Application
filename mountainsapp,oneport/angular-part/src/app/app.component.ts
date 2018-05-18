import { Component } from '@angular/core';
import {HttpService} from "./http.service";
//import {Point} from "./mapa/mapa.component";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private httpService: HttpService) {}


  //
  // printMap(){
  //   this.httpService.printMap().subscribe(map =>{
  //
  //     console.log(map[0].x);
  //     console.log("yes");
  //   })


  //}


}
export interface Point{

  x?:number;
  y?:number;
}
export interface Marker {



}
