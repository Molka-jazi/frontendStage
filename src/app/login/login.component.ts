import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

login(){
 console.log("welcome to login");
}

forgetPasswd(){
console.log("forget passwd")
}

signup(){
  console.log("sign up form")
}

google(){
  return this
}

}
