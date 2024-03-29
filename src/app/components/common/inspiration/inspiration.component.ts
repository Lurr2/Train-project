import { ProductsService } from './../../../products.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss'],
})
export class InspirationComponent implements OnInit {
  inspirationData: any;
  isPopupOpen: boolean = false;
  public contentInspiration: any;
  public isVisible = true;
  public detailsElement: any = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts('inspiration').subscribe((data) => {
      this.inspirationData = data;
    });
  }
  togglePopup(cards: any) {
    this.contentInspiration = cards;
    this.isPopupOpen = true;
  }
  toggleContent() {
    this.isVisible = false;
  }
  showCard() {
    this.isVisible = true;
    this.isPopupOpen = false;
  }

  @Output() closed = new EventEmitter<void>();

  closePopup() {
    this.isPopupOpen = false;
  }
}
