import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'am-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @Input() hotel: any;
  constructor() { }

  ngOnInit() {
    this.hotel.starsDraw = [];
    for (let i = 0; i < this.hotel.stars; i++) {
      this.hotel.starsDraw.push(i);
    }
  }
}
