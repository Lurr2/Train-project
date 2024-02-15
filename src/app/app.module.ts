import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { PromotionComponent } from './components/common/promotion/promotion.component';
import { InspirationComponent } from './components/common/inspiration/inspiration.component';
import { NewsComponent } from './components/common/news/news.component';
import { ContactComponent } from './components/common/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    PromotionComponent,
    InspirationComponent,
    NewsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
