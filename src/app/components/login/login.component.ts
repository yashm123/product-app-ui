import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router  } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private productsService: ProductsService,
              private cookieService: CookieService,
               private router: Router
  ) { }
 // model: any = {};
 InvalidUser ;
  login(data) {
   console.log(data.emailid);
   let message: string;
   this.productsService.login(data.Email_ID, data.Password).subscribe(res => {
    console.log(res.json());
    message = res.json();
     if (message === 'UserPage') {
       // this.productsService.setEmail(data.Email_ID);
       this.cookieService.set( 'Email', data.Email_ID );
       this.router.navigate(['/UserPage', data.Email_ID]);
     }
    if ( message === 'AdminPage') {
         this.router.navigate(['/AdminPage']);
    } else {
         this.InvalidUser = 'Invalid Credentials';
    }
  });
  }
  Register() {
    this.router.navigate(['/Register']);
  }

}
