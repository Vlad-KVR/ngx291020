import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  // tslint:disable-next-line:no-inferrable-types
  public myTitle: string = '';

  @Output()
  public toggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav(mySpan: HTMLSpanElement): void {
    this.toggle.emit(mySpan);
  }

}
