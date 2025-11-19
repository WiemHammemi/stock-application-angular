import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilCltFrsComponent } from './deatil-clt-frs.component';

describe('DeatilCltFrsComponent', () => {
  let component: DeatilCltFrsComponent;
  let fixture: ComponentFixture<DeatilCltFrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeatilCltFrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatilCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
