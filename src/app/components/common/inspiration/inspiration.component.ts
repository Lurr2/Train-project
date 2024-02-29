import { ProductsService } from './../../../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss'],
})
export class InspirationComponent implements OnInit {
  isPopupOpen: boolean = false;
  inspirationData: any;

  constructor(private productsService: ProductsService) {}
  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  ngOnInit(): void {
    this.productsService.getProducts('inspiration').subscribe((data) => {
      this.inspirationData = data;
    });
  }
}
