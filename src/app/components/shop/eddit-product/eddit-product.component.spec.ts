import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdditProductComponent } from './eddit-product.component';

describe('EdditProductComponent', () => {
  let component: EdditProductComponent;
  let fixture: ComponentFixture<EdditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdditProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
