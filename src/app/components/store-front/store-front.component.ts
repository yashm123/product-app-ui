import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import {Cart} from '../../models/cart.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.scss']
})
export class StoreFrontComponent implements OnInit {
  EmailID: string;
  products: Product[];
  cart: Cart[] = new Array<Cart>();
  totalItems = 0 ;
  totalBill = 0;
  constructor(private productsService: ProductsService,
  private route: ActivatedRoute,
  private router: Router,
  private cookieService: CookieService
  ) {
  }

  ngOnInit() {
   // this.EmailID = this.productsService.getEmail();
this.EmailID =  this.cookieService.get('Email');
   // this.EmailID = this.route.snapshot.paramMap.get('Email');
   /*
   this.productsService.EmailUpdated.subscribe(
       (data) => {
      //  this.EmailID = this.productsService.getEmail();
       // console.log(this.EmailID);
      }
    );
    */
     console.log(this.EmailID);
    this.productsService.getdata().subscribe(data => {
      this.products = data.json();
      this.products.forEach(element => {
      element.QtyInCart = 0;
      });
      console.log(this.products);
      // console.log(this.EmailID);
      this.GetData();
    });

    }

    public GetData() {
      this.productsService.GetUserCart(this.EmailID).subscribe(data => {
        this.cart = data.json();
        console.log(this.cart);
        if ( this.cart.length !== 0 ) {
          for ( let i = 0; i < this.cart.length; i++) {
             for (let j = 0; j < this.products.length; j++) {
               if (this.cart[i].productId === this.products[j].productId) {
                   this.products[j].QtyInCart = this.cart[i].quantity;
                   this.products[j].AddedToCart = true;
                   this.totalItems = this.totalItems + this.cart[i].quantity;
                   this.totalBill = this.totalBill + this.cart[i].quantity * this.products[j].price;
               }
             }
          }
        }
    } );
    }
    public addProductToCart(product: Product): void {
   // this.totalBill = 200;
   console.log(this.totalBill);
  // this.productsService.setEmail('yash');
      console.log(product);
       if (product.QtyTobeAdded > product.quantity || product.QtyTobeAdded <  1) {
         product.ErrorMsgDisplay = true;
         if (product.QtyTobeAdded > product.quantity) {
           product.ErrorMsg = 'Quantity Not Available';
         } else {
          product.ErrorMsg = 'Please Enter Qunatity >= 1';
         }
        } else {
           this.productsService.AddToCart(this.EmailID, product.productId, product.QtyTobeAdded).subscribe(data => {
             let message: string;
             message = data.json();
             console.log(message);
             product.AddedToCart = true;
             product.ErrorMsgDisplay = false;
             product.quantity = product.quantity - product.QtyTobeAdded;
             product.QtyInCart = product.QtyInCart + product.QtyTobeAdded;
             this.totalItems = this.totalItems + product.QtyTobeAdded;
             this.totalBill = this.totalBill + product.QtyTobeAdded * product.price;
             product.QtyTobeAdded = null;
          });
          // console.log(product.QtyInCart);
          // this.productsService.AddItem(product.QtyTobeAdded);
        }
      }

    public RemoveProductFromCart(product: Product): void {
     // this.productsService.setEmail('sahil');
      this.productsService.RemoveFromCart(this.EmailID, product.productId ).subscribe(data => {
        let message: string;
        message = data.json();
        console.log(message);
        product.quantity = product.quantity + product.QtyInCart;
        this.totalItems = this.totalItems - product.QtyInCart;
        this.totalBill = this.totalBill - (product.QtyInCart * product.price);
        product.QtyTobeAdded = null;
        product.QtyInCart = 0;
        product.AddedToCart = false;
     });
    }

    public emptyCart() {
      this.productsService.EmptyCart(this.EmailID ).subscribe(data => {
        let message: string;
        message = data.json();
        console.log(message);
        this.products.forEach(product => {
          product.quantity = product.quantity + product.QtyInCart;
          product.QtyTobeAdded = null;
          this.totalItems = this.totalItems - product.QtyInCart;
          this.totalBill = this.totalBill - (product.QtyInCart * product.price);
          product.QtyInCart = 0;
          product.AddedToCart = false;
        });
     });
    }
     public checkout() {
       this.router.navigate(['/OrderConfirmation']);
     }
     SignOut() {
          this.router.navigate(['']);
          this.cookieService.deleteAll();
     }
}


