import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;
  @Input() wishlistadded : boolean;

  constructor(private msg: MessengerService,
              private cartService : CartService,
              private wishlistService : WishlistService) { }

  ngOnInit() { 
    
   }
 addToCart(){    
   this.cartService.addProductsToCart(this.productItem).subscribe(()=>{
  this.msg.sendMsg(this.productItem);
   })
  }
  addToWishlist(){
    this.wishlistService.addToWishList(this.productItem.id).subscribe(()=>{ 
      this.wishlistadded= true;
    })
  }
    removeToWishlist(){
      this.wishlistService.removeFromWishList(this.productItem.id).subscribe(()=>{
        this.wishlistadded= false;
      })
    }
  
 

}
