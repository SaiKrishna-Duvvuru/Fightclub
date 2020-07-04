import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   productList :Product[]=[];
   wishlist : any[] =[];
  
  constructor(private productservice : ProductService, 
              private wishlistservice : WishlistService) { }

  ngOnInit() {
   this.loadProducts();
   this.loadWishlistItems();
   };
  


  loadProducts(){
    this.productservice.getProducts().subscribe((products)=>{
      this.productList=products;
      
      

  });
}
 
  loadWishlistItems(){
   this.wishlistservice.getWishListItems().subscribe((productsIds)=>{
     this.wishlist= productsIds;
   })
  
  }
}

