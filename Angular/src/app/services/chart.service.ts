import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  closePrice: any = [];
  dates: any = [];

  constructor(private httpClient: HttpClient, private router: Router) { }

  getChart(symbol: string) {
    this.httpClient.get('https://api.iextrading.com/1.0/stock/' + symbol + '/chart/3m')
      .subscribe(
        (data: any[]) => {
          if (data.length) {
            for (let i = 0; i < data.length; i++) {
              this.closePrice.push(data[i].close);
              this.dates.push(data[i].date);
            }
          }
        }
      );
  }
}
