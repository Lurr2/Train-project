import { ProductsService } from './../../../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss'],
})
export class InspirationComponent implements OnInit {
  inspirationData: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts('inspiration').subscribe((data) => {
      this.inspirationData = data;
      console.log('inspirationData');
    });
  }
}
