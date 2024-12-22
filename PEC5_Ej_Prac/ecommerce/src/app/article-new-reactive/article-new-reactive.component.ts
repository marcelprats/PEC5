import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {
  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/https?:\/\/[\w\-\.]+\.\w{2,}(\/.*)?/)]],
      isOnSale: [false]
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      console.log('Formulari reactiu enviat:', this.articleForm.value);
    } else {
      console.log('El formulari és invàlid');
    }
  }
}
