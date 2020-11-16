import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdVerifyPage } from './id-verify.page';

describe('IdVerifyPage', () => {
  let component: IdVerifyPage;
  let fixture: ComponentFixture<IdVerifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdVerifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdVerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
