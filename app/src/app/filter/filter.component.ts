import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }
  stars = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2],
    [1]
  ];

  ngOnInit() {
  }

}
