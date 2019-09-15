import { Injectable, EventEmitter } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import {RegisterComponent} from '../components/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  static Email: string;
  constructor(private http: Http,
  ) {  }
 // Products: Product[];
 EmailUpdated: EventEmitter<string> = new EventEmitter<string>();


 setEmail(email) {
  ProductsService.Email = email;
  this.EmailUpdated.emit(email);
}

getEmail() {
console.log('GetEmail Called');
  return  ProductsService.Email;
}

  getdata() {
    console.log('Service Called');
    return this.http.get('http://10.221.40.136:5000/api/GetProducts');
  }
    login(EmailId: string, Password: string) {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('Email_ID', EmailId);
      urlSearchParams.append('Password', Password);

      console.log('Login Service Called');
      return this.http.post('http://10.221.40.136:5000/api/ValidateUser', urlSearchParams);
    }

    Register(Email_ID, Password, Name, City, Mobile_No, Gender) {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('Email_ID', Email_ID);
      urlSearchParams.append('Password', Password);
      urlSearchParams.append('Name', Name);
      urlSearchParams.append('City', City);
      urlSearchParams.append('Gender', Gender);
      urlSearchParams.append('Mobile_Number', Mobile_No);
      console.log('Regsiter Service Called');
      return this.http.post('http://10.221.40.136:5000/api/AddUser', urlSearchParams);
    }

    AddProduct(Product_Id, Name, Price, Description, Quantity) {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('ProductId', Product_Id);
      urlSearchParams.append('Name', Name);
      urlSearchParams.append('Price', Price);
      urlSearchParams.append('Description', Description) ;
      urlSearchParams.append('Quantity', Quantity);
      return this.http.post('http://10.221.40.136:5000/api/AddProduct', urlSearchParams);
    }


    DeleteProduct(ProductId) {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('ProductId', ProductId);
      return this.http.post('http://10.221.40.136:5000/api/DeleteProduct', urlSearchParams);
    }
    
    getdatabyId(id) {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('ProductId', id);
      return this.http.post('http://10.221.40.136:5000/api/GetProductById', urlSearchParams);
    }

    UpdateProduct(Product_Id, Name, Price, Description, Quantity) {
      console.log('Service Called');
      console.log(Quantity);
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('ProductId', Product_Id);
      urlSearchParams.append('Name', Name);
      urlSearchParams.append('Price', Price);
      urlSearchParams.append('Description', Description) ;
      urlSearchParams.append('Quantity', Quantity);
      return this.http.post('http://10.221.40.136:5000/api/UpdateProduct', urlSearchParams);
    }

    AddToCart(Email_ID, Product_Id, Quantity) {
      console.log('Service Called');
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('Email_ID', Email_ID);
      urlSearchParams.append('Product_Id', Product_Id);
      urlSearchParams.append('Quantity', Quantity);
      return this.http.post('http://10.221.40.136:5000/api/AddToCart', urlSearchParams);
    }
    RemoveFromCart(Email_ID, Product_Id) {
      console.log('Service Called');
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('Email_ID', Email_ID);
      urlSearchParams.append('Product_Id', Product_Id);
      return this.http.post('http://10.221.40.136:5000/api/RemoveFromCart', urlSearchParams);
    }
     GetUserCart(Email_ID) {
      console.log('Service Called');
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('Email_ID', Email_ID);
      return this.http.post('http://10.221.40.136:5000/api/GetUserCartDetails', urlSearchParams);
     }
     EmptyCart(Email_ID) {
      console.log('Service Called');
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('Email_ID', Email_ID);
      return this.http.post('http://10.221.40.136:5000/api/EmptyCart', urlSearchParams);
     }

     GetUserOrder(Email_ID) {
      console.log('Service Called');
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('Email_ID', Email_ID);
      return this.http.post('http://10.221.40.136:5000/api/ProductsInCart', urlSearchParams);
     }

     BuyNow(Email_ID) {
      console.log('Service Called');
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.append('Email_ID', Email_ID);
      return this.http.post('http://10.221.40.136:5000/api/BuyProducts', urlSearchParams);
     }
  }
 /*
    this.http.get('http://10.221.40.136:49555/WebService1.asmx/GetProducts')
    .subscribe(data => { this.Products = data.json();
      console.log(this.Products);
      return this.Products;
    }
     );
    */

