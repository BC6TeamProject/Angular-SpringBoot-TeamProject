import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../../services/stocks.service';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css']
})
export class StockInfoComponent implements OnInit {

  symbolInfo: string;
  companyNameInfo: string;
  exchangeInfo: string;
  industryInfo: string;
  websiteInfo: string;
  descriptionInfo: string;
  ceoInfo: string;
  sectorInfo: string;

  constructor(private service: StocksService) { }

  ngOnInit() {
    this.symbolInfo = this.service.symbolInfo;
    this.companyNameInfo = this.service.companyNameInfo;
    this.exchangeInfo = this.service.exchangeInfo;
    this.industryInfo = this.service.industryInfo;
    this.websiteInfo = this.service.websiteInfo;
    this.descriptionInfo = this.service.descriptionInfo;
    this.ceoInfo = this.service.ceoInfo;
    this.sectorInfo = this.service.sectorInfo;
  }
}
