import { Component, OnInit } from '@angular/core';

import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  constructor( private stocksService: StocksService ) { }

  coins = this.stocksService.getCoins().subscribe( d => this.coins = d )[0];

  ngOnInit() {
  }

}
