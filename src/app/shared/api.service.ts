import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postEvent(data : any){
    return this.http.post<any>("http://localhost:3000/postevent",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEvent(){
    return this.http.get<any>("http://localhost:3000/postevent")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEvent(id:number){
    return this.http.delete<any>("http://localhost:3000/postevent/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postCourse(data : any){
    return this.http.post<any>("http://localhost:3000/postcourse",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCourse(){
    return this.http.get<any>("http://localhost:3000/postcourse")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteCourse(id:number){
    return this.http.delete<any>("http://localhost:3000/postcourse/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postProduct(data : any){
    return this.http.post<any>("http://localhost:3000/postproduct",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getProduct(){
    return this.http.get<any>("http://localhost:3000/postproduct")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteProduct(id:number){
    return this.http.delete<any>("http://localhost:3000/postproduct/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getProfessor(){
    return this.http.get<any>("http://localhost:3000/signup")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
