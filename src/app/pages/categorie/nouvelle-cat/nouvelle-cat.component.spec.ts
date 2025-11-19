import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCatComponent } from './nouvelle-cat.component';

describe('NouvelleCatComponent', () => {
  let component: NouvelleCatComponent;
  let fixture: ComponentFixture<NouvelleCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
