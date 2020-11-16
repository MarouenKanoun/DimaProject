import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindRidesPage } from './find-rides.page';

describe('FindRidesPage', () => {
  let component: FindRidesPage;
  let fixture: ComponentFixture<FindRidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindRidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
