import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './separador/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { AutoresComponent } from './autores/autores.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { AudiosComponent } from './audios/audios.component';
import { VideosComponent } from './videos/videos.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { FooterComponent } from './footer/footer.component'; 

import {DataService} from './data.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    
    BusquedaComponent,
    
    ResultadosComponent,
    
    AutoresComponent,
    
    
    DocumentosComponent,
    
    
    AudiosComponent,
    
    
    VideosComponent,
    
    
    PublicidadComponent,
    
    
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
