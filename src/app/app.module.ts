import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CoinsComponent } from './coins/coins.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../common/components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'coins/:id', component: CoinDetailComponent },
  { path: 'coins', component: CoinsComponent, data: { title: 'Coins' } },
  { path: '', redirectTo: '/coins', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    HeaderComponent,
    CoinDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // only for debugging purpose
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
