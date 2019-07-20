import { Component, OnInit } from '@angular/core';

import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  // storing coins
  coins: any = {};

  // Getting screen width
  screen_width = screen.width;

  // Columns to display
  displayedColumns: String[] = ['sno', 'name', 'curr_price', 'per_chn_1h', 'per_chn_24h', 'per_chn_7d', 'mrk_cap'];

  constructor( private stocksService: StocksService ) { }

  ngOnInit() {
    this.coins = (this.stocksService.getCoins().subscribe( data => { this.coins = data; } )[0]);
  }

}
