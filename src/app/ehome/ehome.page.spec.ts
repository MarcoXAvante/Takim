import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EhomePage } from './ehome.page';

describe('EhomePage', () => {
  let component: EhomePage;
  let fixture: ComponentFixture<EhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
