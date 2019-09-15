import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductsService } from './services/products.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreFrontComponent } from './components/store-front/store-front.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CookieService } from 'ngx-cookie-service';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    StoreFrontComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AddproductComponent,
    EditproductComponent,
    ShoppingCartComponent,
    OrderConfirmationComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductsService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
