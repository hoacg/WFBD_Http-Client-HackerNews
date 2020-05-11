import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from "./article/article.component";
import {ListArticleComponent} from "./list-article/list-article.component";
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {
    path: '',
    component: ListArticleComponent
  },
];


@NgModule({
  declarations: [
    ArticleComponent,
    ListArticleComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GuestModule { }
