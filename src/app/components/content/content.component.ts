import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  account = undefined;

  constructor() {}

  ngOnInit() {
  }

  _visibleContent: string;
  get visibleContent(): string {
    return this._visibleContent;
  }

  @Input()
  set visibleContent(value: string) {
    this._visibleContent = value;
  };
}