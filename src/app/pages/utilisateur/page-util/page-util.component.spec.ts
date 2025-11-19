import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUtilComponent } from './page-util.component';

describe('PageUtilComponent', () => {
  let component: PageUtilComponent;
  let fixture: ComponentFixture<PageUtilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUtilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
