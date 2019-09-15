import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreFrontComponent } from './components/store-front/store-front.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AdminComponent} from './components/admin/admin.component';
import {AddproductComponent} from './components/addproduct/addproduct.component';
import {EditproductComponent} from './components/editproduct/editproduct.component';
import { OrderConfirmationComponent} from './components/order-confirmation/order-confirmation.component';
import {CheckoutComponent} from './components/checkout/checkout.component';

const routes: Routes = [];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot([
        {
            component : StoreFrontComponent,
            path: 'UserPage/:Email'
        },
        {
            component : StoreFrontComponent,
            path: 'UserPage'
        },
        {
            component: AdminComponent,
            path: 'AdminPage'
        },
        {
            component: RegisterComponent,
            path: 'Register'
        },
        {
            component: AddproductComponent,
            path: 'AddProduct'
        },
        {
            component: EditproductComponent,
            path: 'EditProduct/:id'
        },
        {
            component: OrderConfirmationComponent,
            path: 'OrderConfirmation'
        },
        {
            component: CheckoutComponent,
            path: 'CheckOut'
        },
        {
            component: LoginComponent,
            path: '**'
        }
    ])
]
})
export class AppRoutingModule { }
