import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAndBillingComponent } from './payment-and-billing.component';

describe('PaymentAndBillingComponent', () => {
  let component: PaymentAndBillingComponent;
  let fixture: ComponentFixture<PaymentAndBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentAndBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAndBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
