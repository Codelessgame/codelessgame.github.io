import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnComponent } from './two-column.component';

describe('Light2ColumnComponent', () => {
  let component: TwoColumnComponent;
  let fixture: ComponentFixture<TwoColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoColumnComponent]
    });
    fixture = TestBed.createComponent(TwoColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
