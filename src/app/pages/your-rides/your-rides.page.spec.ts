import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourRidesPage } from './your-rides.page';

describe('YourRidesPage', () => {
  let component: YourRidesPage;
  let fixture: ComponentFixture<YourRidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourRidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourRidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
