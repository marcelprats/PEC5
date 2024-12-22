import { Component } from '@angular/core';

@Component({
  selector: 'app-article-template-form',
  templateUrl: './article-template-form.component.html',
  styleUrls: ['./article-template-form.component.css']
})
export class ArticleTemplateFormComponent {
  article = {
    name: '',
    description: '',
    price: null
  };

  onSubmit(form: any) {
    console.log('Formulari enviat:', form.value);
  }
}
