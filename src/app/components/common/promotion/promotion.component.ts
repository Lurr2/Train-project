import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit {
  dataPromotion: any;
  public isVisible = true;
  public detailsElement: any = [];

  toggleBox(card: any) {
    this.detailsElement = card;
    this.isVisible = false;
  }
  showBox() {
    this.isVisible = true;
  }

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts('promotion').subscribe((data) => {
      this.dataPromotion = data;
    });
  }
}
