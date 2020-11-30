import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EregisterPage } from './eregister.page';

describe('EregisterPage', () => {
  let component: EregisterPage;
  let fixture: ComponentFixture<EregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
