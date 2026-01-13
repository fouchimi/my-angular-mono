import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelInventoryAppAlert } from '../../hotelinventoryapp/src/hotel-inventory-app-alert';

describe('HotelInventoryAppAlert', () => {
  let component: HotelInventoryAppAlert;
  let fixture: ComponentFixture<HotelInventoryAppAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelInventoryAppAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelInventoryAppAlert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
