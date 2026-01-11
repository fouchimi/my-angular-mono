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
    console.log(this.toggleRooms);
    this.toggleRooms = !this.toggleRooms;
  }
}
