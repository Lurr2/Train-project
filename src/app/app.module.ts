import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { PromotionComponent } from './components/common/promotion/promotion.component';
import { InspirationComponent } from './components/common/inspiration/inspiration.component';
import { NewsComponent } from './components/common/news/news.component';
import { ContactComponent } from './components/common/contact/contact.component';
import { MainComponent } from './components/common/main/main.component';
import { SliderComponent } from './components/common/main-items/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    PromotionComponent,
    InspirationComponent,
    NewsComponent,
    ContactComponent,
    MainComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}