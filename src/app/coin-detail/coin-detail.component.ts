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
  coins$ = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StocksService
  ) { }

  ngOnInit() {
    this.coins$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap ) =>
      this.service.getCoinById( params.get('id')))
    );
  }

}
