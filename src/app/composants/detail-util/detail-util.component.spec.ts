import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUtilComponent } from './detail-util.component';

describe('DetailUtilComponent', () => {
  let component: DetailUtilComponent;
  let fixture: ComponentFixture<DetailUtilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailUtilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
