import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

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



}
