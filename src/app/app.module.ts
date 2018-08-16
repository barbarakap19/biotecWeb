import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';



import {MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatChipsModule} from '@angular/material';

import 'hammerjs';

import { FooterComponent } from './footer/footer.component';
import { SegmentosComponent } from './segmentos/segmentos.component';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { HomeComponent } from './home/home.component';
import { MatrizEnsaiosComponent } from './matriz-ensaios/matriz-ensaios.component';

const appRoutes: Routes = [
{
  path: 'segmentos', component: SegmentosComponent
}

];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SegmentosComponent,
    HomeComponent,
    MatrizEnsaiosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    RouterModule.forRoot(appRoutes)
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
