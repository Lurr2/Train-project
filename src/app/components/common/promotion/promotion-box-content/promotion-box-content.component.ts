import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-box-content',
  templateUrl: './promotion-box-content.component.html',
  styleUrls: ['./promotion-box-content.component.scss'],
})
export class PromotionBoxContentComponent implements OnInit {
  @Input() dataContent: any = [];

  constructor() {}

  ngOnInit(): void {
    console.log('dataContent');
  }
}
