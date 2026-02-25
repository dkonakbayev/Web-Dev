import { Component, OnInit } from '@angular/core';
import { NgForOf, CurrencyPipe, AsyncPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  standalone: true,
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
  imports: [NgForOf, CurrencyPipe, AsyncPipe],
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}