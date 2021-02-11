import {Component, OnInit} from '@angular/core';
import {CoursService} from "../services/cours.service";
import {AuthenticationService} from "../services/authentication.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

courses;
currentCourse:any;

  private currentTime:number=0;
  private selectedFiles: any;
  private currentFileUpload: any;
  private progress: number;
  constructor(public crsService:CoursService,
              private router:Router,
              private authService:AuthenticationService) {

  }

  ngOnInit(): void {
    this.authService.loadToken();
    if(this.authService.isAuthenticated()){
      this.getCourses('/courses')
    }
  }
 getTs(){
    return this.currentTime+Date.now();
 }

 private getCourses(url){
    this.crsService.getResource(url).subscribe(data=>{
      this.courses=data;
    },error => {
      console.log(error)
    })
 }
 onSelectedFile(event){
    this.selectedFiles=event.target.files;
 }

 uploadPhoto(){
    this.progress = 0;
this.currentFileUpload = this.selectedFiles.item(0);
this.crsService.uploadPhotoCours(this.currentFileUpload,this.currentCourse.id).subscribe(event =>{
  if(event.type ===HttpEventType.UploadProgress){
    this.progress = Math.round(100*event.loaded / event.total);
  }else if(event instanceof HttpResponse){
    this.currentTime = Date.now();
  }
})
 }


 onCoursDetails(c){
    this.router.navigateByUrl("/cours/"+c.id);
 }
}
