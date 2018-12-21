import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditComponent } from './adminedit.component';

describe('AdmineditComponent', () => {
  let component: AdmineditComponent;
  let fixture: ComponentFixture<AdmineditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
