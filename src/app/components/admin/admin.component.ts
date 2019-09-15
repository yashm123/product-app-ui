import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { Router  } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  products: Product[];
  constructor(private productsService: ProductsService,
  private router: Router,
private cookieService: CookieService
) { }

  ngOnInit() {
    this.productsService.getdata().subscribe(data => {
      this.products = data.json();
      console.log(this.products);
    });
  }

  Edit(id) {
     console.log(id);
     this.router.navigate(['/EditProduct', id]);
  }
  Delete(ProductId) {
    let message: string;
    this.productsService.DeleteProduct(ProductId).subscribe(res => {
      console.log(res.json());
      message = res.json();
       if (message === 'Deleted') {
         console.log('Deleted');
         this.productsService.getdata().subscribe(data => {
          this.products = data.json();
         });
         this.router.navigate(['/AdminPage']);
       } else {
            console.log('Error');
       }
    });
  }
  AddProduct() {
    console.log('Add Product');
    this.router.navigate(['/AddProduct']);
  }

  SignOut() {
    this.router.navigate(['']);
    this.cookieService.deleteAll();
}
}
