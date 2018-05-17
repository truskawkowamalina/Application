import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpService} from "./http.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { MapaComponent } from './mapa/mapa.component';
import {AgmCoreModule} from "@agm/core";


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCf3JpAb9Iv6Xc28NIl57F3iBWV1qEfCbU'
    }),

  ],

  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
