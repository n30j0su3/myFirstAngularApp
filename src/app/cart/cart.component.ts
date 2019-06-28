import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute} from '@angular/router';
import { CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  constructor(
    //private route : ActivatedRoute,
    private cartService : CartService,
  ) { 
    this.items = this.cartService.getItems();
  }
  clearCart(){
    this.items = this.cartService.clearCart();
  }
  ngOnInit() {
    //this.route.paramMap.subscribe(params=>{
    //});
  }

}
