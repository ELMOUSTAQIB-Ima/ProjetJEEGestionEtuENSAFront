import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from "./authentication.service";
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  public host:string="http://localhost:8080";
  constructor(private http:HttpClient,
              private authservice:AuthenticationService)
              {}

  public getResource(url):Observable<any>{
     return this.http.get(this.host+url);
  }

  uploadPhotoCours(file: File,idCours):Observable<HttpEvent<{}>>{
    let formdata :FormData = new FormData();
    formdata.append('file',file);
    let header = new HttpHeaders({'authorization':this.authservice.jwtToken});
    const req = new HttpRequest('POST',this.host+'/uploadPhoto/'+idCours,formdata,{
      reportProgress:true,
      responseType:'text',
      headers:header
    });
    return this.http.request(req);
  }



  public patchResource(url,data){
    let header = new HttpHeaders({'authorization':this.authservice.jwtToken});
        return this.http.patch(url,data,{headers:header});
  }


}
