import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleTemplateFormComponent } from './article-template-form/article-template-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, 
    ArticleListComponent, 
    ArticleNewTemplateComponent, 
    ArticleNewReactiveComponent,
    ArticleTemplateFormComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
