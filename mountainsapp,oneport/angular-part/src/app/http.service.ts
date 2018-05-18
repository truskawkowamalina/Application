import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"

import {Point} from "./app.component";
import {Observable} from "rxjs/Observable";



@Injectable()

export class HttpService{


  constructor(private  http:HttpClient) {}

  printMap():Observable<Array<Point>> {

    return this.http.get<Array<Point>>('http://localhost:8080/resource');



  }
}
