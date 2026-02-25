import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return of([
      { type: 'Overnight', price: 25.99 },
      { type: '2-Day', price: 9.99 },
      { type: 'Standard', price: 4.99 },
    ]);
  }
}

