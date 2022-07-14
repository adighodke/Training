import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmpRequestsComponent } from './admin-emp-requests.component';

describe('AdminEmpRequestsComponent', () => {
  let component: AdminEmpRequestsComponent;
  let fixture: ComponentFixture<AdminEmpRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEmpRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmpRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
