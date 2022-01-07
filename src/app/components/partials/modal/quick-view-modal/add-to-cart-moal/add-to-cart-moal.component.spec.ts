import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartMoalComponent } from './add-to-cart-moal.component';

describe('AddToCartMoalComponent', () => {
  let component: AddToCartMoalComponent;
  let fixture: ComponentFixture<AddToCartMoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartMoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartMoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
