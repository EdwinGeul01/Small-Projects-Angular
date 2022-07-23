import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzelComponent } from './puzzel.component';

describe('PuzzelComponent', () => {
  let component: PuzzelComponent;
  let fixture: ComponentFixture<PuzzelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
