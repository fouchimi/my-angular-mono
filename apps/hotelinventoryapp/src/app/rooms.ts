import { Component } from '@angular/core';
import { IRooms } from './i-rooms';

@Component({
  selector: 'hotel-inventory-app-rooms',
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms  {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  toggleRooms = false;

  rooms : IRooms = {
    totalRooms: 30,
    availableRooms : 5,
    bookedRooms : 5
  }

  toggle() {
    this.toggleRooms = !this.toggleRooms;
  }
}
