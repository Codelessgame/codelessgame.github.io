import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dark2ColumnComponent } from './dark-2-column.component';

describe('Dark2ColumnComponent', () => {
  let component: Dark2ColumnComponent;
  let fixture: ComponentFixture<Dark2ColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dark2ColumnComponent]
    });
    fixture = TestBed.createComponent(Dark2ColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
