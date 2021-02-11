import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any; 
  mode:number=0;
  errorMessage:string;
  constructor(private authService:AuthenticationService,
      private toastr: ToastrService,
              private router:Router,
  ){}
  ngOnInit(): void {
  }

  onRegister(user){ 
       this.authService.registre(user).subscribe(data=>{
      this.user=data;
      this.mode=1;
      this.toastr.info(user.username+'  is signing up successfully', 'Registration Successfully!',{
        timeOut:5000,
        positionClass:'toast-bottom-right'

      });
      this.router.navigateByUrl('/login');
    },err => {
      this.errorMessage=err.error.message;
      this.mode=0;
    })
  }

}
