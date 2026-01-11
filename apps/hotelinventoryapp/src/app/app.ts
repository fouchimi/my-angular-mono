import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Rooms } from './rooms';

@Component({
  imports: [NxWelcome, RouterModule, Rooms],
  selector: 'hotel-inventory-app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'hotelinventoryapp';
}
