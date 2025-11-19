import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailMvtstkArticleComponent } from './datail-mvtstk-article.component';

describe('DatailMvtstkArticleComponent', () => {
  let component: DatailMvtstkArticleComponent;
  let fixture: ComponentFixture<DatailMvtstkArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatailMvtstkArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailMvtstkArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
