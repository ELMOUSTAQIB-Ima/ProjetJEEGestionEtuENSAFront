import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoursComponent } from './cours/cours.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { Ng5SliderModule } from 'ng5-slider';
import { AngularRaveModule } from 'angular-rave';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import{NgxPaginationModule} from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CoursComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularRaveModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-bottom-right',
      preventDuplicates:false
    }),
    ToastContainerModule,
    BsDatepickerModule.forRoot(),
    NgxPaginationModule,//ici pour utiliser la pagination
     HttpClientModule,//pour utiliser http client qui envoie des requette au serveur pour avoir de données on aura besion d'importer httpclientmodule
     FormsModule, //pour utiliser ngform pour les formulaires on aura besion d'importer FormsModule
    MDBBootstrapModule.forRoot()//ici pour utiliser les composents de MDBotstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
