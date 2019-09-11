import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {FormGroup, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];
  checkoutForm;
  constructor(private caService: CartService, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.items = this.caService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name : '',
      address:''
    });
  }
onSubmit(customerdata) {
  console.log("Your order has been sb=ubmitted ", customerdata);
  this.caService.clearCart();
  this.checkoutForm.reset();
}
}
