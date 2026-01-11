import { Component } from '@angular/core';

@Component({
  selector: 'hotel-inventory-app-rooms',
  imports: [],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms  {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  toggleRooms = false;

  toggle() {
    this.toggleRooms = !this.toggleRooms;
  }
}
