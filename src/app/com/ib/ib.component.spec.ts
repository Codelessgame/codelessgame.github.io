import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IBComponent } from './ib.component';

describe('IBComponent', () => {
  let component: IBComponent;
  let fixture: ComponentFixture<IBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IBComponent]
    });
    fixture = TestBed.createComponent(IBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
