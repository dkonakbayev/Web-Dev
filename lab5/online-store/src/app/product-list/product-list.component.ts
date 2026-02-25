import { Component } from '@angular/core';
import { NgForOf, NgIf, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Product, products } from '../products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [NgForOf, NgIf, CurrencyPipe, RouterLink, ProductAlertsComponent],
})
export class ProductListComponent {
  selectedFilter: string = 'None';
  productss: Product[] = products;
  filteredItems = [...products];

  shareByTelegram(url: string) { 
    var sharelink = 
      'https://t.me/share/url?url=' + 
      url + 
      '&text=Здравствуйте! Я бы хотел купить у вас это!'; 
    window.open(sharelink); 
  } 
 
  shareByWhatsapp(url: string) { 
    var sharelink = 
      'https://wa.me/?text=' + 
      url + 
      '&text=Здравствуйте! Я бы хотел купить у вас это!'; 
    window.open(sharelink); 
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  filterByCategory() {
    if (this.selectedFilter == 'None') {
      this.filteredItems = this.productss;
    } else {
      this.filteredItems = this.productss.filter(
        (p) => p.category === this.selectedFilter
      );
    }
  }

  setFilteredItem(event: any) {
    this.selectedFilter = event.target.value;
    this.filterByCategory();
  }

  incrementLikes(id: number) {
    products
      .filter((p: Product) => p.id === id)
      .map((p: Product) => (p.likes += 1));
  }

  deleteProduct(id: number) {
    this.productss = this.productss.filter((p) => p.id !== id);
    this.filterByCategory();
  }
}

