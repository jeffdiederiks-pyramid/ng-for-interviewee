import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [
    trigger('toolbarColor', [
      state('Dashboard', style({
        backgroundColor: '#4285f4'
      })),
      state('Table', style({
        backgroundColor: '#4aa956'
      })),
      state('More', style({
        backgroundColor: '#a94a64'
      })),
      state('Settings', style({
        backgroundColor: '#616161'
      })),
      transition('* => *', animate('400ms ease-in')),
    ])
  ]
})

export class ToolbarComponent {
  private pageTitle: string = 'Dashboard';

  @Output() menuButtonClick = new EventEmitter<any>();

  _toolbarMode: string;
  get toolbarMode(): string {
    return this._toolbarMode;
  }

  @Input()
  set toolbarMode(value: string) {
    this._toolbarMode = value;
    this.pageTitle = value;
  };

  onMenuIconClick() {
    this.menuButtonClick.emit();
  }
}
