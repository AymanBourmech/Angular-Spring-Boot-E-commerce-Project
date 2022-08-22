import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentInfo } from '../models/payment-info';
import { Purchase } from '../models/purchase';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private http: HttpClient) {}

  placeOrder(purchase: Purchase): Observable<Purchase> {
    return this.http.post<Purchase>(
      environment.baseUrl + 'checkout/purchase',
      purchase
    );
  }
  createPaymentIntent(paymentInfo: PaymentInfo): Observable<any> {
    return this.http.post<PaymentInfo>(
      environment.baseUrl + 'checkout/payment',
      paymentInfo
    );
  }
}
