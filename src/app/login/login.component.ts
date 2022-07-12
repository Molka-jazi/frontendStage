import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { __values } from 'tslib';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router) { }
  ngOnInit(): void {
  }
 

login(){
 console.log("welcome to login"); 
 this.http.get('http://localhost:5000/auth/login')
 var data=  sessionStorage.getItem("token");
 //sessionStorage.setItem("token",data);
 sessionStorage.setItem('token','data.token')
 this.router.navigate(["/dashboard"])

}

signup(){
  this.router.navigate(["/signup"])
}

getall(){
  console.log("get All");
  this.http.get('http://localhost:5000/auth/all')

}



}
