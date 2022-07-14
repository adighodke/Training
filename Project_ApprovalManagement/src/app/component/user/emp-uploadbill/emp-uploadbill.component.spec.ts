import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpUploadbillComponent } from './emp-uploadbill.component';

describe('EmpUploadbillComponent', () => {
  let component: EmpUploadbillComponent;
  let fixture: ComponentFixture<EmpUploadbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpUploadbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpUploadbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
