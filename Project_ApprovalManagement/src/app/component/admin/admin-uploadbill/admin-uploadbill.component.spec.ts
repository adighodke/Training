import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUploadbillComponent } from './admin-uploadbill.component';

describe('AdminUploadbillComponent', () => {
  let component: AdminUploadbillComponent;
  let fixture: ComponentFixture<AdminUploadbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUploadbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUploadbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
