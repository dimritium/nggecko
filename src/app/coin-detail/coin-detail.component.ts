import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})

export class CoinDetailComponent implements OnInit {
  coins$: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StocksService
  ) {
    this.coins$.service = service;
    this.coins$.router = router;
    this.coins$.service = service;
  }

  ngOnInit() {
    console.log(Object.keys(this.coins$.router));
    console.log(this.coins$.router['navigationId']);
  }
}
