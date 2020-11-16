import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StopoversPage } from './stopovers.page';

describe('StopoversPage', () => {
  let component: StopoversPage;
  let fixture: ComponentFixture<StopoversPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopoversPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StopoversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
