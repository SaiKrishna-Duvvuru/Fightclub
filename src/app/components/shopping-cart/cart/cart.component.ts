import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id : 1,productId: 1, productName: 'Test1',qty: 1, price: 100},
    // {id : 2,productId: 2, productName: 'Test2',qty: 2, price: 340},
    // {id : 3,productId: 3, productName: 'Test3',qty: 3, price: 150},
    // {id : 4,productId: 4, productName: 'Test4',qty: 2, price: 200},

  ];

  cartTotal = 0;

  constructor(private msg: MessengerService,
               private cartService : CartService) { }

  ngOnInit() {
  this.handleSubscription();
  this.loadCartItems();
  
  }  

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems(); 
    });
 }
 
 loadCartItems(){
   this.cartService.getCartItems().subscribe((items: CartItem[])=>{
    this.cartItems=items;
    console.log(items)
    this.calcCartTotal();
   })
 }
 
 calcCartTotal(){
  this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
  };
}





