import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsData: any;
  public isVisible = true;
  public newsDetailsElement: any = [];

  constructor(private productsService: ProductsService) {}

  toggleCard(cards: any) {
    this.newsDetailsElement = cards;
    this.isVisible = false;
  }
  showCard() {
    this.isVisible = true;
  }

  ngOnInit(): void {
    this.productsService.getProducts('news').subscribe((data) => {
      this.newsData = data;
    });
  }
}
