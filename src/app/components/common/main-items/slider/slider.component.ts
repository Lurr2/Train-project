import { Component, Input, OnInit } from '@angular/core';

interface mainSliderImage {
  imageSrc: string ;
  imageAlt: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  
@Input() images: mainSliderImage[] = []
  @Input()
  indicators: true = true;

  selectedIndex = 0;
  

  constructor() {}

  ngOnInit(): void {

  }
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}

