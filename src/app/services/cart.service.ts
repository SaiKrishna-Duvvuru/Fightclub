import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {

    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
          
          
        let cartItems: CartItem[] = [];
           
        for (let item of result) {
          let productExists = false;
          for (let cartitem in cartItems) {
            if (cartItems[cartitem].productId === item.product.id) {
              cartItems[cartitem].qty++;
              productExists = true;
              break;
            }
          }
          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));

          }

        }
        return cartItems;
      })
    );
  }

  addProductsToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });

  }
}
