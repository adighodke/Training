import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnggmanagerComponent } from './enggmanager.component';

describe('EnggmanagerComponent', () => {
  let component: EnggmanagerComponent;
  let fixture: ComponentFixture<EnggmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnggmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnggmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
