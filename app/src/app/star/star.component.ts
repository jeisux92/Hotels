import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'am-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() color: string;
  constructor(private _ElementRef: ElementRef) { }

  ngOnInit() {
    this._ElementRef.nativeElement.querySelector('img').style.color = this.color;
  }

}
