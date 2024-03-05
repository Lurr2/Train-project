import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsData: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts('news').subscribe((data) => {
      this.newsData = data;
    });
  }
}
