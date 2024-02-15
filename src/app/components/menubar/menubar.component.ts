import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pl');
    translate.use('pl');
  }

  ngOnInit(): void {
  }

}
