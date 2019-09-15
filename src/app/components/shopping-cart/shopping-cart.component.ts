import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

 @Input() totalItems;
 @Input() totalBill ;
 constructor(private productsService: ProductsService) {

  //  this.total = productsService.total;
   }

  ngOnInit() {
   // this.total = this.productsService.total ;
  // this.totalBill = 0;
  }

  emptyCart() {
    this.totalBill = 100;
  }

}
