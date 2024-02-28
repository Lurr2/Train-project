import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-promotion-box-content',
  templateUrl: './promotion-box-content.component.html',
  styleUrls: ['./promotion-box-content.component.scss'],
})
export class PromotionBoxContentComponent implements OnInit {
  @Input() dataContent: any = [];

  constructor(private translate: TranslateService) {}
  currentLanguageIs(language: string): boolean {
    return this.translate.currentLang === language;
  }

  ngOnInit(): void {}
}
