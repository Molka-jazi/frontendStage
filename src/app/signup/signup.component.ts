import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
signup(){
  console.log("sign up form");
 this.http.get('http://localhost:5000/auth/signup')
 this.router.navigate(["/dashboard"])

}
}
