import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EventModel } from './event.model';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  formValue !: FormGroup;
  eventModelObj : EventModel = new EventModel();
  eventData !:any;
  constructor(private router : Router , private formbuilder: FormBuilder, private api:ApiService) { }


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
    this.formValue = this.formbuilder.group({
      date :[''],
      time :[''],
      title :[''],
      place :[''],
    })
    this.getAllEvent();
  }
  postEventDetails(){
    this.eventModelObj.date =this.formValue.value.date;
    this.eventModelObj.time =this.formValue.value.time;
    this.eventModelObj.title =this.formValue.value.title;
    this.eventModelObj.place =this.formValue.value.place;

    this.api.postEvent(this.eventModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Event Added Succefully")
      let ref = document.getElementById('cancel')
      ref?.click();
      
      this.formValue.reset();
    },
    err=>{
      alert("Something Went wrong");
    })

  }
  getAllEvent(){
    this.api.getEvent()
    .subscribe(res=>{
      this.eventData = res;
      this.getAllEvent()


    })
  }
  deleteEvent(row : any){
    this.api.deleteEvent(row.id )
    .subscribe(res=>{
      alert("Event deleted");
      this.getAllEvent()
    })

  }

}
