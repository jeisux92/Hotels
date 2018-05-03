import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'am-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() queryHotel = new EventEmitter<any>();
  name: string = '';
  full: boolean = false;
  toggle1 = false;
  toggle2 = false;
  id0: boolean;
  id1: boolean;
  id2: boolean;
  id3: boolean;
  id4: boolean;
  starC = [false, false, false, false, false];
  stars = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2],
    [1]
  ];

  constructor() { }
  ngOnInit() {
  }
  changeFull() {
    this.starC[0] = this.full;
    this.starC[1] = this.full;
    this.starC[2] = this.full;
    this.starC[3] = this.full;
    this.starC[4] = this.full;

  }
  buscar() {
    let starSend = [];
    let count = 0;
    this.starC.forEach((x, index) => {
      if (x) {
        starSend.push(5 + (index * -1));
      }
      else {
        count++;
      }
    });
    if (count === 5) {
      starSend = [1, 2, 3, 4, 5];
    }
    console.log(!this.name ? true : this.name);
    this.queryHotel.emit(`${!this.name ? null : this.name}/${starSend.join('-')}`)
  }
  changeValue(index) {
    this.starC[index] = !this.starC[index];
  }
  changet() {
    this.toggle1 = !this.toggle1;
  }
  changet2() {
    this.toggle2 = !this.toggle2;
  }
}
