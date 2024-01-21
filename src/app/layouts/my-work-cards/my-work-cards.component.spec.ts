import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkCardsComponent } from './my-work-cards.component';

describe('MyWorkCardsComponent', () => {
  let component: MyWorkCardsComponent;
  let fixture: ComponentFixture<MyWorkCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWorkCardsComponent]
    });
    fixture = TestBed.createComponent(MyWorkCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
