import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ROUTES} from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SendmsgComponent } from './components/sendmsg/sendmsg.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';
import { StockPriceComponent } from './components/stocks/stock-price/stock-price.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminmenuComponent } from './components/adminmenu/adminmenu.component';
import { AdmineditComponent } from './components/adminmenu/adminedit/adminedit.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { StockNewsComponent } from './components/stocks/stock-news/stock-news.component';
import { StockInfoComponent } from './components/stocks/stock-info/stock-info.component';
import {LoginGuard} from './login.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    SendmsgComponent,
    InboxComponent,
    OutboxComponent,
    StockPriceComponent,
    JumbotronComponent,
    ProfileComponent,
    AdminmenuComponent,
    AdmineditComponent,
    StocksComponent,
    StockNewsComponent,
    StockInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {onSameUrlNavigation: 'reload'}),
    ReactiveFormsModule,
    HttpModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
