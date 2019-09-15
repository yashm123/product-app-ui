import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Order } from '../../models/order.model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  Orders: Order[];
  total: number;
  constructor(private productService: ProductsService, private cookieService: CookieService,
  private router: Router,
  ) {this.total =  0; }

  ngOnInit() {
    this.productService.GetUserOrder(this.cookieService.get('Email')).subscribe(data => {
       this.Orders = data.json();
       console.log(this.Orders);
      this.Orders.forEach(element => {
        this.total = this.total + element.price * element.quantity;
        element.ProductTotal = element.price * element.quantity;
        console.log(this.total);
       });
    });


  }
  Continue() {
    console.log('Continue');
this.router.navigate(['/UserPage']);
  }
  PlaceOrder() {
    console.log('Place Order');
    this.productService.BuyNow(this.cookieService.get('Email')).subscribe(data => {
      let message: string;
     message = data.json();
     console.log(message);
      });
      this.router.navigate(['/CheckOut']);
  }
}
