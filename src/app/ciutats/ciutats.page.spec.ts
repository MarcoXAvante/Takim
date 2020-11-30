import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CiutatsPage } from './ciutats.page';

describe('CiutatsPage', () => {
  let component: CiutatsPage;
  let fixture: ComponentFixture<CiutatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiutatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CiutatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
