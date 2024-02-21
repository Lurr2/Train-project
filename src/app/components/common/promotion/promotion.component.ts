import { Component, OnInit } from '@angular/core';
import { PromotionBoxService } from 'src/app/promotion-box.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit {
  dataPromotion: any;

  constructor(private promotionBoxServeice: PromotionBoxService) {}

  ngOnInit(): void {
    this.promotionBoxServeice.getData().subscribe((data) => {
      this.dataPromotion = data;
      console.log(this.dataPromotion);
    });
  }
}
