import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspiration-cards',
  templateUrl: './inspiration-cards.component.html',
  styleUrls: ['./inspiration-cards.component.scss'],
})
export class InspirationCardsComponent implements OnInit {
  @Input() DataInspiration: any = [];
  isHovered: boolean = false;
  constructor() {}

  toggleHover() {
    this.isHovered = !this.isHovered;
  }
  ngOnInit(): void {}
}
