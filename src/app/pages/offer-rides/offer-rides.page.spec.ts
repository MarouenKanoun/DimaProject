import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferRidesPage } from './offer-rides.page';

describe('OfferRidesPage', () => {
  let component: OfferRidesPage;
  let fixture: ComponentFixture<OfferRidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferRidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferRidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
