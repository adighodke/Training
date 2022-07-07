import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadSEComponent } from './head-se.component';

describe('HeadSEComponent', () => {
  let component: HeadSEComponent;
  let fixture: ComponentFixture<HeadSEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadSEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
