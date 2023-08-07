import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { RodapeComponent } from './rodape/rodape.component';



@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    ContatoComponent,
    CabecalhoComponent,
    DetalhesComponent,
    RodapeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HomeComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
