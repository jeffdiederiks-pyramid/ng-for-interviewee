import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  @Output() sidebarButtonClick = new EventEmitter<string>();

  onDashboardButtonClick() {
    this.sidebarButtonClick.emit('Dashboard');
  }

  onTableButtonClick() {
    this.sidebarButtonClick.emit('Table');
  }

  onMoreButtonClick() {
    this.sidebarButtonClick.emit('More');
  }

  onTrelloButtonClick() {
    open('https://trello.com/');
  }

  onGoogleCalendarButtonClick() {
    open('https://calendar.google.com/calendar/r');
  }

  onSettingsButtonClick() {
    this.sidebarButtonClick.emit('Settings');
  }
}
