import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelUtilComponent } from './nouvel-util.component';

describe('NouvelUtilComponent', () => {
  let component: NouvelUtilComponent;
  let fixture: ComponentFixture<NouvelUtilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelUtilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
