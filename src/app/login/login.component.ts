import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;


  constructor(private router : Router, private formBuilder:FormBuilder, private _http:HttpClient) { }

  goToLogin() {
    this.router.navigate(["/login"])
  }

  goToHome() {
    this.router.navigate(["/home"])
  }
  goToRegister() {
    this.router.navigate(["/register"])
  }
  goToCourse() {
    this.router.navigate(["/course"])
  }
  goToEvent() {
    this.router.navigate(["/event"])
  }
  goToProduct() {
    this.router.navigate(["/product"])
  }
  goToContact() {
    this.router.navigate(["/contact"])
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  logIn(){
    this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password

    })
    if(user.role == "admin"){
      alert("login is Succefully  Admin!");
      this.loginForm.reset();
      this.router.navigate(["/event"])
    }else if (user.role == "etudiant"){

      alert("login is Succefully  Etudiant !");

      this.router.navigate(["/home"])

    }else if (user.role == "professor"){
      alert("login is Succefully  professor !");

      this.router.navigate(["/course"])
    }else if(user.role == "saleman"){
      alert("login is Succefully  sale man !");

      this.router.navigate(["/product"])
    }else {
      alert("user Not Found !")
    }
  
  })
  }


}
