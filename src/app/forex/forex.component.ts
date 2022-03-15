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
  src = 'INR';
  keys: any;
  map = {};
  constructor(private frxServ: ForexService) {}

  ngOnInit() {
    this.val = this.frxServ.demo;
  }
  public getRates() {
    this.map = {};
    this.frxServ.getRates(this.src).subscribe((val) => {
      console.log(val.rates);
      this.rates = val.rates;
      this.keys = Object.keys(val.rates);
    });
  }
  public getConvert(e,curr) {
    const amount = e.target.value;
    this.map[curr] = {src: Number(amount), target: Number(amount)*this.rates[curr]};
    console.log(this.map)
  }
  public getConvertFromTarget(e,curr) {
    const amount = e.target.value;
    this.map[curr] = {src: Number(amount)/this.rates[curr], target: Number(amount)};
    console.log(this.map)
  }
}
