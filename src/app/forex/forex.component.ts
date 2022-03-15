import { Component, OnInit } from '@angular/core';
import { ForexService } from './forex.service';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css'],
})
export class ForexComponent implements OnInit {
  val: any;
  rates: any;
  src='INR';
  constructor(private frxServ: ForexService) {}

  ngOnInit() {
    this.val = this.frxServ.demo;
    this.frxServ.getRates(this.src).subscribe(val=> {
      console.log(val.rates);
      this.rates = val.rates;
    });
  }
}
