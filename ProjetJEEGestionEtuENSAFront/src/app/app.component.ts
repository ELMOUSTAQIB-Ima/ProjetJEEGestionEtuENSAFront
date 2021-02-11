import { Component } from '@angular/core';
import {CoursService} from './services/cours.service';
 import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetJEEGestionEtuENSAFront';

  courses;
  currentCours;

 constructor(public coursService:CoursService,
             public  router:Router,
             public authService:AuthenticationService){}

 ngOnInit(): void {
   //this.getCourses();
   //this.authService.loadUser();
   this.authService.loadToken();
   if(this.authService.isAuthenticated()){
     this.router.navigateByUrl('/courses');
   }

 }

 // private getCourses() {
 //   this.coursService.getResource(this.coursService.host+"/courses")
 //     .subscribe(data=>{
 //       this.courses=data;
 //     },err=>{
 //       console.log(err);
 //     })
 // }

 onLogin() {
     this.router.navigateByUrl('/login');
      }

      onRegister(){
    this.router.navigateByUrl("/register");
  }

 /*getEtudiantsByCrs(c) {
   this.currentCours=c;
   this.router.navigateByUrl('/etudiants/2/'+c.id);
 }*/
}
