import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTemplateFormComponent } from './article-template-form.component';

describe('ArticleTemplateFormComponent', () => {
  let component: ArticleTemplateFormComponent;
  let fixture: ComponentFixture<ArticleTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleTemplateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
