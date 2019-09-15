import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  ProductExists;
  constructor(private productsService: ProductsService,
  private router: Router) { }

  ngOnInit() {
  }
  AddProduct(data) {
    console.log(data);
      let message: string;
      this.productsService.AddProduct(data.Product_Id, data.Name, data.Price, data.Description, data.Quantity).subscribe(res => {
        console.log(res.json());
        message = res.json();
         if (message === 'ProductAdded') {
           this.router.navigate(['/AdminPage']);
         } else {
              this.ProductExists = message;
         }
      });
      }
  }

