import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StocksService } from '../../../services/stocks.service';

@Component({
  selector: 'app-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.css']
})
export class StockNewsComponent implements OnInit {

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

  constructor(private router: Router, private service: StocksService) { }

  ngOnInit() {

    const symbol = localStorage.getItem('stockId');
    this.service.getStockNews();
    this.headline = this.service.headline;
    this.source = this.service.source;
    this.url = this.service.url;
    this.summary = this.service.summary;
    this.service.getCompanyInfo(symbol);
    this.setValues();
  }

  setValues() {
    this.symbolInfo = this.service.symbolInfo;
    this.sectorInfo = this.service.sectorInfo;
    this.companyNameInfo = this.service.companyNameInfo;
    this.descriptionInfo = this.service.descriptionInfo;
    this.ceoInfo = this.service.ceoInfo;
    this.exchangeInfo = this.service.exchangeInfo;
    this.websiteInfo = this.service.websiteInfo;
    this.industryInfo = this.service.industryInfo;
  }

}
