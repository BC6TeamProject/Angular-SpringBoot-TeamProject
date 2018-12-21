import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {ChartService} from './chart.service';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  price: number;
  company: string;
  symbol: string;
  stockPrice: any = [];
  stockCompany: any = [];
  stockSymbol: any = [];
  headline: any = [];
  source: any = [];
  url: any = [];
  summary: any = [];
  symbolInfo: string;
  companyNameInfo: string;
  exchangeInfo: string;
  industryInfo: string;
  websiteInfo: string;
  descriptionInfo: string;
  ceoInfo: string;
  sectorInfo: string;

  constructor(private http: Http, private httpClient: HttpClient, private router: Router, private chart: ChartService) {}

  stockList = [
    { symbol: 'googl', company: 'Google'},
    { symbol: 'aapl', company: 'Apple'},
    { symbol: 'amzn', company: 'Amazon'},
    { symbol: 'msft', company: 'Microsoft'},
    { symbol: 'ibm', company: 'IBM'},
    { symbol: 'ko', company: 'Coca-Cola'},
    { symbol: 'intc', company: 'Intel'},
    { symbol: 'dis', company: 'Disney'},
    { symbol: 'nke', company: 'Nike'},
    { symbol: 'v', company: 'Visa'},
    { symbol: 'vz', company: 'Verizon'},
    { symbol: 'mcd', company: 'McDonalds'},
    { symbol: 'axp', company: 'AmericanExpress'},
    { symbol: 'cvx', company: 'Chevron'},
    { symbol: 'fb', company: 'Facebook'},
    { symbol: 'pep', company: 'PepsiCo'},
    { symbol: 'baba', company: 'Alibaba'},
    { symbol: 'nflx', company: 'Netflix'},
    { symbol: 't', company: 'ATT'},
    { symbol: 'orcl', company: 'Oracle'},
    { symbol: 'tsla', company: 'Tesla'},
  ];

  getStockPrice() {
    for (let i = 0; i < this.stockList.length; i++) {
      this.http.get('https://api.iextrading.com/1.0/stock/' + this.stockList[i].symbol + '/quote')
        .subscribe(
          (res: Response) => {
            const comp = res.json();
            this.price = comp.latestPrice;
            this.company = comp.companyName;
            this.symbol = comp.symbol;
            this.stockPrice.push(this.price);
            this.stockCompany.push(this.company);
            this.stockSymbol.push(this.symbol);
          }
        );
    }
  }

  getStockNews() {
    this.httpClient.get('https://api.iextrading.com/1.0/stock/market/news/last/10')
      .subscribe(
        (data: any[]) => {
          if (data.length) {
            for (let i = 0; i < data.length; i++) {
              this.headline.push(data[i].headline);
              this.source.push(data[i].source);
              this.url.push(data[i].url);
              this.summary.push(data[i].summary);
            }
          }
        }
      );
  }

  getCompanyInfo(symbol: string) {
    this.http.get('https://api.iextrading.com/1.0/stock/' + symbol + '/company')
      .subscribe(
        (res: Response) => {
          const comp = res.json();
          this.symbolInfo = comp.symbol;
          this.companyNameInfo = comp.companyName;
          this.exchangeInfo = comp.exchange;
          this.industryInfo = comp.industry;
          this.websiteInfo = comp.website;
          this.descriptionInfo = comp.description;
          this.ceoInfo = comp.CEO;
          this.sectorInfo = comp.sector;
        }
      );
  }
  }

