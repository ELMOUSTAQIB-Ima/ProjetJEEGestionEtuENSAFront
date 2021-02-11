import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AuthenticationService} from '../services/authentication.service';


declare var FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   

  constructor(public authService:AuthenticationService,
              public router:Router,
              public toastr: ToastrService) { }

  ngOnInit() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '866558730422032',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

  public mode = 0;

  onLogin(dataform){ 

    this.authService.login(dataform).subscribe(resp=>{
      let jwtToken = resp.headers.get('authorization');
         this.authService.saveToken(jwtToken);
         this.authService.authenticated=true;
          this.authService.authenticatedUser=jwtToken;
          this.showSuccess();
      if(this.authService.isAuthenticated()) {
        //this.caddyService.loadCaddyFromLocalStorage();
        // if (this.authService.isAdmin()) {
        //   this.router.navigateByUrl("/cours")
        // }
        this.router.navigateByUrl('/courses');
        }
      },error => {
      this.mode=1;
      this.errorSuccess();
    })
  }

  onRegister(){ 
    this.router.navigateByUrl("/register");
  }

  showSuccess() {
    this.toastr.success('You Login Successfuly!', 'Login Success!');
  }

  errorSuccess(){
    this.toastr.error('Please Check for an account!', 'Login Failed!');

  }

  infoSuccess(){
    this.toastr.info('Hello world!', 'Toastr fun!');
  }

  warningSuccess(){
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }

 

  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
    {
      console.log('submitLogin',response);
      if (response.authResponse)
      {
        this.authService.jwtToken="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIiwiVVNFUiJdLCJpc3MiOiIvbG9naW4iLCJleHAiOjE1OTU2ODc4MzR9.4Y1aCmUaT0wW3UA6flWQOcqFhzZxpHBtvCBGZyDnDlk";
      // this.authService.authenticatedUser=response.userID;
        this.authService.saveToken(this.authService.jwtToken);
        this.router.navigateByUrl('');
this.showSuccess();
      }
      else
      {
        console.log('User login failed');
      }
    });

  }


}
