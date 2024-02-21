import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-promotion-box',
  templateUrl: './promotion-box.component.html',
  styleUrls: ['./promotion-box.component.scss'],
})
export class PromotionBoxComponent implements OnInit {
  @Input() promotionData: any = [];

  public promotionPrice: number = 0;

  constructor(private translate: TranslateService) {}

  currentLanguageIs(language: string): boolean {
    return this.translate.currentLang === language;
  }
  ngOnInit(): void {
    const browserLang = navigator.language.split('-')[0];
    this.translate.setDefaultLang(browserLang);
    this.translate.use(browserLang);

    this.calculateDiscount();
  }
  public calculateDiscount() {
    this.promotionPrice =
      this.promotionData.price -
      this.promotionData.price * this.promotionData.discountValue;
  }
}
