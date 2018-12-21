import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../../services/stocks.service';
import { Router } from '@angular/router';
import {ChartService} from '../../../services/chart.service';

@Component({
  selector: 'app-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.css']
})
export class StockPriceComponent implements OnInit {

  constructor(private stocks: StocksService, private router: Router, private chart: ChartService) { }
  stockPrice: any = [];
  stockCompany: any = [];
  stockSymbol: any = [];
  symbolInfo: any;

  ngOnInit() {
    this.stocks.getStockPrice();
    this.stockPrice = this.stocks.stockPrice;
    this.stockCompany = this.stocks.stockCompany;
    this.stockSymbol = this.stocks.stockSymbol;
  }

  getStockInfo(stockSymbol: string, stockPrice: any) {
    this.symbolInfo = stockSymbol;
    this.stocks.price = stockPrice;
    localStorage.removeItem('stockId');
    localStorage.setItem('stockId', this.symbolInfo);
    this.stocks.getCompanyInfo(this.symbolInfo);
    this.chart.getChart(this.symbolInfo);
    this.router.navigate(['/stockinfo']);
  }
}
