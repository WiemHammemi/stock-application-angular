import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatistiqueComponent } from './page-statistique.component';

describe('PageStatistiqueComponent', () => {
  let component: PageStatistiqueComponent;
  let fixture: ComponentFixture<PageStatistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStatistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
