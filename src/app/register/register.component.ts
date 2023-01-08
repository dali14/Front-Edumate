import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup;
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
    this.signupForm = this.formBuilder.group({
      'name': [''],
      'email': [''],
      'password': [''],
      'role':['etudiant']
    })
  }
  signUp(){
   this._http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{
    alert('Registration Succefully');
    this.signupForm.reset();
    this.router.navigate(["/home"]);
   }, err=>{
    alert('Something went wrong');

   })
  }


}
