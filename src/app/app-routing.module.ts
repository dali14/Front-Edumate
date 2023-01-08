import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './register/register.component';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './components/contact/contact.component';




const routes: Routes=[
{path : "home" , component : HomeComponent},
{path : "login" , component : LoginComponent},
{path : "register" , component : RegisterComponent},
{path : "course" , component : CourseComponent},
{path : "event" , component : EventComponent},
{path : "product" , component : ProductComponent},
{path : "contact" , component : ContactComponent}



]

@NgModule({
  declarations: [], 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
