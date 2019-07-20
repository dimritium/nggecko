import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private api_url = 'https://api.coingecko.com/api/v3';

  constructor(
    private http: HttpClient
    ) { }

  getCoins() {
      return ( this.http.get( this.api_url.concat('/coins') ) );
  }
  getCoinById(id: String) {
    console.log( 'hooola');
    return ( this.http.get( this.api_url.concat('/coins/' + id )) );
  }
}
