import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteactivityComponent } from './deleteactivity.component';

describe('DeleteactivityComponent', () => {
  let component: DeleteactivityComponent;
  let fixture: ComponentFixture<DeleteactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteactivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
