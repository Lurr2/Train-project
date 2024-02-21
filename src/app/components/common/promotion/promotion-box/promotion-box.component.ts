import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promotion-box',
  templateUrl: './promotion-box.component.html',
  styleUrls: ['./promotion-box.component.scss']
})
export class PromotionBoxComponent implements OnInit {
  
  
  @Input() imagePath!: string;
  @Input() price!: number;
  @Input() promotionPrice: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
