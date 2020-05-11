import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateArticleComponent } from './create-article/create-article.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { ListArticleComponent } from './list-article/list-article.component';

const routes: Routes = [
  {
    path: '',
    component: ListArticleComponent
  },

  {
    path: 'create',
    component: CreateArticleComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    DemoComponentComponent,
    CreateArticleComponent,
    ListArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
