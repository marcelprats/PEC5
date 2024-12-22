import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';

@NgModule({
  declarations: [
    AppComponent, 
    ArticleListComponent, 
    ArticleNewTemplateComponent, 
    ArticleNewReactiveComponent 
  ],
  imports: [
    BrowserModule,
    NavbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
