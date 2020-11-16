import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StopoversListPage } from './stopovers-list.page';

describe('StopoversListPage', () => {
  let component: StopoversListPage;
  let fixture: ComponentFixture<StopoversListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopoversListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StopoversListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
