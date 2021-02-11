import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  public host:string="https://localhost:8080";
  private host2:string="http://localhost:7676";
  public jwtToken:string; 
  private roles:Array<any>=[];
  public authenticated: boolean;
  public authenticatedUser;
  constructor(private http:HttpClient) {
}

login(user){ 
  return this.http.post(this.host2+"/login",user,{observe: 'response'});
}

registre(user){
   return this.http.post(this.host2+"/register",user);
}


  isAuthenticated(){
    return this.roles && this.authenticated;
  }

saveToken(jwtToken){
    this.jwtToken=jwtToken;
    localStorage.setItem("token",jwtToken);
    let JwtHelper= new JwtHelperService();
    this.roles=JwtHelper.decodeToken(this.jwtToken).roles;
  this.authenticatedUser=JwtHelper.decodeToken(this.jwtToken).sub; 
  //console.log(JwtHelper.decodeToken((this.jwtToken)).sub);
console.log(this.authenticatedUser);
}



  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  let JwtHelper= new JwtHelperService();
  this.roles=JwtHelper.decodeToken(this.jwtToken).roles;
  this.authenticatedUser=JwtHelper.decodeToken(this.jwtToken).sub;

  this.authenticated=true;
    return this.jwtToken;
}


logout(){ 
    localStorage.removeItem('token');
     this.authenticatedUser=undefined;
     this.authenticated=false;
  this.jwtToken=undefined;

}

  isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;
  }
}
