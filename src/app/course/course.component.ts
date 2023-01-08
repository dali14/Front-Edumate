import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { CourseModel } from './course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  formValue !: FormGroup;
  courseModelObj : CourseModel = new CourseModel();
  courseData !:any;
  constructor(private router : Router , private formbuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      course :[''],
      chapter :[''],
      date :[''],
    })
    this.getAllCourse();
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

  postCourseDetails(){
    this.courseModelObj.course =this.formValue.value.course;
    this.courseModelObj.chapter =this.formValue.value.chapter;
    this.courseModelObj.date =this.formValue.value.date;

    this.api.postCourse(this.courseModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Course Added Succefully")
      let ref = document.getElementById('cancel')
      ref?.click();
      
      this.formValue.reset();
      this.getAllCourse()

    },
    err=>{
      alert("Something Went wrong");
    })

  }
  getAllCourse(){
    this.api.getCourse()
    .subscribe(res=>{
      this.courseData = res;

    })
  }
  deleteCourse(row : any){
    this.api.deleteCourse(row.id )
    .subscribe(res=>{
      alert("Event deleted");
      this.getAllCourse()
    })

  }


}
