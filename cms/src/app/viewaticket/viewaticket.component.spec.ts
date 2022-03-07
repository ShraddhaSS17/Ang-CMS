import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaticketComponent } from './viewaticket.component';

describe('ViewaticketComponent', () => {
  let component: ViewaticketComponent;
  let fixture: ComponentFixture<ViewaticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
