import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Rooms } from './rooms';
import { HotelInventoryAppAlert } from '../hotel-inventory-app-alert';

@Component({
  imports: [NxWelcome, RouterModule, Rooms, HotelInventoryAppAlert],
  selector: 'hotel-inventory-app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'hotelinventoryapp';
}
