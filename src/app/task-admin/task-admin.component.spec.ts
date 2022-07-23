import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAdminComponent } from './task-admin.component';

describe('TaskAdminComponent', () => {
  let component: TaskAdminComponent;
  let fixture: ComponentFixture<TaskAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
