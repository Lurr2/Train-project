import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  images: { url: string, caption: string }[] = [
    { url: 'https://via.placeholder.com/600x400', caption: 'First slide' },
    { url: 'https://via.placeholder.com/600x400', caption: 'Second slide' },
    { url: 'https://via.placeholder.com/600x400', caption: 'Third slide' }
  ];
  
  currentIndex: number = 0;
  
  

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  showPrev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
