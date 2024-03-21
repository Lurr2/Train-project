import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss'],
})
export class NewsContentComponent implements OnInit {
  @Input() newsDataContent: any = [];

  constructor() {}

  ngOnInit(): void {}
}
