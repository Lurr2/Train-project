import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promotion-box',
  templateUrl: './promotion-box.component.html',
  styleUrls: ['./promotion-box.component.scss'],
})
export class PromotionBoxComponent implements OnInit {
  @Input() promotionData: any = [];

  public promotionPrice: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.promotionData.title);
    this.calculateDiscount();
  }
  public calculateDiscount() {
    this.promotionPrice =
      this.promotionData.price -
      this.promotionData.price * this.promotionData.discountValue;
  }
}
