import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmpHistoryComponent } from './admin-emp-history.component';

describe('AdminEmpHistoryComponent', () => {
  let component: AdminEmpHistoryComponent;
  let fixture: ComponentFixture<AdminEmpHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEmpHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmpHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
