import { ProductsService } from './../../../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss'],
})
export class InspirationComponent implements OnInit {
  inspirationData: any;
  isPopupOpen: boolean = false;
  public contentInspiration: any = [];

  constructor(private productsService: ProductsService) {}
  togglePopup(cards: any) {
    this.contentInspiration = cards;
    this.isPopupOpen = true;
  }

  ngOnInit(): void {
    this.productsService.getProducts('inspiration').subscribe((data) => {
      this.inspirationData = data;
    });
  }
}
