import { Component, OnInit } from '@angular/core';

import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  constructor( private stocksService: StocksService ) { }

  // Getting screen width
  screen_width = screen.width;

  // Get coins data
  coins = this.stocksService.getCoins().subscribe( d => { this.coins = d; } )[0];

  // Columns to display
  displayedColumns: String[] = ['sno', 'name', 'curr_price', 'per_chn_1h', 'per_chn_24h', 'per_chn_7d', 'mrk_cap'];

  ngOnInit() {
  }

}
