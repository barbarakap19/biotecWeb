import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { SegmentosComponent } from './segmentos/segmentos.component';
import { HomeComponent } from './home/home.component';
import { MatrizEnsaiosComponent } from './matriz-ensaios/matriz-ensaios.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AreaDeConhecimentoComponent } from './area-de-conhecimento/area-de-conhecimento.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { CadastroLaboratorioComponent } from './cadastro-laboratorio/cadastro-laboratorio.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SegmentosComponent,
    HomeComponent,
    MatrizEnsaiosComponent,
    CarouselComponent,
    AreaDeConhecimentoComponent,
    LaboratorioComponent,
    CadastroLaboratorioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
