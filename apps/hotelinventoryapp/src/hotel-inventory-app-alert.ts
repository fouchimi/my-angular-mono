import { Component } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'hotel-inventory-app-alert',
  imports: [NgbAlert],
  templateUrl: './hotel-inventory-app-alert.html',
  styleUrl: './hotel-inventory-app-alert.css',
})
export class HotelInventoryAppAlert {
  show = true;
}
