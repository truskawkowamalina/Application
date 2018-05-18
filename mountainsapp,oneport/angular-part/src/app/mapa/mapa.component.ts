import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../http.service";
//import {Point} from "../app.component";
import {google} from "@agm/core/services/google-maps-types";
import {MapsAPILoader} from "@agm/core";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  title: string = 'My first AGM project';
  // lat: number;
  // lng: number;
  //marker:Marker;
  //  polyline: Array<any>;
  //  polylines: Array<any>;

  ar:Array<Point>= [];

  // public mark: [
  //   {
  //     lat: number,
  //     lng: number,
  //   }
  //   ];
  constructor(private httpService: HttpService) {}

  printMap(){


      this.httpService.printMap().subscribe(map =>{



        for (let i=0; i<map.length; i++){

          let point:Point = {
            lat: map[i].x,
            lng: map[i].y
          };
        this.ar.push(point);
        }

       // this.marker = new Marker(map[0].x, map[0].y);


        // let point:Point = {
        //   lat: map[0].x,
        //   lng: map[0].y
        // };
        // let point2:Point = {
        //   lat: map[1].x,
        //   lng: map[1].y
        // };
        // console.log(point);
        // this.ar.push(point, point2);

      })


  }



  ngOnInit() {


  }

}
 interface Point{

  lat?:number;
  lng?:number;

}

// export class Marker{
//   lat:number;
//   lng:number;
//
//   constructor(lat: number, lng:number){
//      this.lat=lat;
//     this.lng=lng;
//   }
// }



