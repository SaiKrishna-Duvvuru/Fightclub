import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { wishlistUrl } from '../config/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor( private http : HttpClient) { }

addToWishList(productId): Observable<any>{
return this.http.post<any>(wishlistUrl, {id:productId});


}

removeFromWishList(productId){
  return this.http.delete(wishlistUrl +'/'+ productId);
}

getWishListItems(){
  return this.http.get(wishlistUrl).pipe(
    map((result : any[])=>{
      console.log(result)
        let productIDs = [];

        result.forEach((item)=>productIDs.push(item.id))
        return productIDs;
    })
  )

}

}
