import { Component } from '@angular/core';
import { IRooms, RoomList } from './i-rooms';

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
    availableRooms : 10,
    bookedRooms : 5
  }

  toggle() {
    this.toggleRooms = !this.toggleRooms;
  }

  roomList: RoomList[] = [{
    roomId: 1,
    roomType: 'Deluxe Room',
    ameniites: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 500,
    photo: '',
    checkingTime: new Date('12-Jan-2026'),
    checkoutTime: new Date('16-Jan-2026')
  }, 
  {
    roomId: 2,
    roomType: 'Deluxe Room Top Tier',
    ameniites: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 2000,
    photo: '',
    checkingTime: new Date('12-Jan-2026'),
    checkoutTime: new Date('16-Jan-2026')
  },
  {
    roomId: 3,
    roomType: 'Private Suite',
    ameniites: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
    price: 3000,
    photo: '',
    checkingTime: new Date('12-Jan-2026'),
    checkoutTime: new Date('16-Jan-2026')
  }
]
}
