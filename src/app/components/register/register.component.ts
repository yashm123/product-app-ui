import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string;
  userexists: string;
  constructor(private productsService: ProductsService,
    private router: Router) {
// this.message =  productsService.name;
   }
  ngOnInit() {
    // this.message = this.productsService.name;
  }
  Register(data) {
    console.log(data.Gender);
    let message: string;
    this.productsService.Register(data.Email_ID, data.Password, data.Name, data.City, data.Mobile_No, data.Gender).subscribe(res => {
      console.log(res.json());
      message = res.json();
       if (message === 'Registered') {
         this.router.navigate(['/']);
       } else {
            this.userexists = 'EmailId ALready Exists';
       }
    });
    }
  }


