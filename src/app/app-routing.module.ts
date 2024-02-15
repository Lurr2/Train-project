import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionComponent } from './components/common/promotion/promotion.component';
import { InspirationComponent } from './components/common/inspiration/inspiration.component';
import { NewsComponent } from './components/common/news/news.component';
import { ContactComponent } from './components/common/contact/contact.component';
import { MainComponent } from './components/common/main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'promotion', component: PromotionComponent},
  {path: 'inspiration', component: InspirationComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contact', component: ContactComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
