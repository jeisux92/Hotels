import { Component, OnInit } from '@angular/core';
import { HotelesService } from './services/hoteles.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  hotels: any[];
  constructor(private _HotelService: HotelesService) {

  }
  ngOnInit() {
    this._HotelService.getHotels().subscribe((x: any) => this.hotels = x);
  }
  query(querys){
    this._HotelService.getHotelsFilter(querys).subscribe((x: any) => this.hotels = x);
  }
}
