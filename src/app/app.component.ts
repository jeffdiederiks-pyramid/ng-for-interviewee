import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sidebarVisible', [
      state('false', style({
        flexBasis: '0px',
        width: '0px',
        padding: '0px'
      })),
      state('true', style({
        flexBasis: '300px',
        paddingLeft: '6px',
        paddingRight: '6px'
      })),
      transition('false => true', animate('200ms ease-in')),
      transition('true => false', animate('200ms ease-out'))
    ])
  ]
})

export class AppComponent {
  private sidebarVisible: boolean = true;
  private currentPage: string = 'Dashboard';

  onMenuButtonClick() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  onSidebarButtonClick(buttonClicked) {
    this.currentPage = buttonClicked;
  }
}
