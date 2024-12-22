import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module'; 
import { ArticleListComponent } from './article-list/article-list.component'; 
import { ArticleTemplateFormComponent } from './article-template-form/article-template-form.component'; 
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleTemplateFormComponent,
    ArticleNewReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    NavbarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
