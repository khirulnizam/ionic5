import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrepeatPage } from './irepeat.page';

describe('IrepeatPage', () => {
  let component: IrepeatPage;
  let fixture: ComponentFixture<IrepeatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrepeatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrepeatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
