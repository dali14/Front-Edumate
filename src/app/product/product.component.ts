import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { ProductModel } from './product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  formValue !: FormGroup;
  productModelObj : ProductModel = new ProductModel();
  productData !:any;
  constructor(private router : Router , private formbuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name :[''],
      price :[''],
      valable :[''],
    })
    this.getAllProduct();

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

  postProductDetails(){
    this.productModelObj.name =this.formValue.value.name;
    this.productModelObj.price =this.formValue.value.price;
    this.productModelObj.valable =this.formValue.value.valable;

    this.api.postProduct(this.productModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Product Added Succefully")
      let ref = document.getElementById('cancel')
      ref?.click();
      
      this.formValue.reset();
    },
    err=>{
      alert("Something Went wrong");
    })

  }
  getAllProduct(){
    this.api.getProduct()
    .subscribe(res=>{
      this.productData = res;
      this.getAllProduct()


    })
  }
  deleteProduct(row : any){
    this.api.deleteProduct(row.id )
    .subscribe(res=>{
      alert("Event deleted");
      this.getAllProduct()
    })

  }


}
