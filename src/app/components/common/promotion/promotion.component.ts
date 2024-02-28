import { Component, OnInit } from '@angular/core';
import { PromotionBoxService } from 'src/app/promotion-box.service';

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

  constructor(private promotionBoxServeice: PromotionBoxService) {}

  ngOnInit(): void {
    this.promotionBoxServeice.getData().subscribe((data) => {
      this.dataPromotion = data;
    });
  }
}
