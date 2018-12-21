import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {SendmsgComponent} from './components/sendmsg/sendmsg.component';
import {InboxComponent} from './components/inbox/inbox.component';
import {OutboxComponent} from './components/outbox/outbox.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AdminmenuComponent} from './components/adminmenu/adminmenu.component';
import {AdmineditComponent} from './components/adminmenu/adminedit/adminedit.component';
import {StockNewsComponent} from './components/stocks/stock-news/stock-news.component';
import {StockInfoComponent} from './components/stocks/stock-info/stock-info.component';
import {LoginGuard} from './login.guard';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard], runGuardsAndResolvers: 'always' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sendmsg', component: SendmsgComponent, canActivate: [LoginGuard] },
  { path: 'inbox', component: InboxComponent, canActivate: [LoginGuard] },
  { path: 'outbox', component: OutboxComponent, canActivate: [LoginGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
  { path: 'adminmenu', component: AdminmenuComponent, canActivate: [LoginGuard] },
  { path: 'adminedit', component: AdmineditComponent, canActivate: [LoginGuard] },
  { path: 'stocknews', component: StockNewsComponent, canActivate: [LoginGuard] },
  { path: 'stockinfo', component: StockInfoComponent, canActivate: [LoginGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
