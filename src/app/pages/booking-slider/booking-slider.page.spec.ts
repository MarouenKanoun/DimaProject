import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingSliderPage } from './booking-slider.page';

describe('BookingSliderPage', () => {
  let component: BookingSliderPage;
  let fixture: ComponentFixture<BookingSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingSliderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
