import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  id;
  product: Product = new Product();
  constructor(private route: ActivatedRoute, private productsService: ProductsService,
  private router: Router
  ) { }

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');
     console.log(this.id);
     this.productsService.getdatabyId(this.id).subscribe(data => {
     this.product = data.json();
     console.log(this.product);
     });
  }
  EditProduct(data) {
    console.log('Edit Product');
    console.log(data.productId);
    console.log(data);
    this.productsService.UpdateProduct(data.ProductId, data.Name, data.Price, data.Description, data.Quantity)
    .subscribe( data1 => {
      console.log(data1.json());
      this.router.navigate(['/AdminPage']);
    });
  }

}
