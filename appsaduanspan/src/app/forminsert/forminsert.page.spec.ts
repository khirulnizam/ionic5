import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForminsertPage } from './forminsert.page';

describe('ForminsertPage', () => {
  let component: ForminsertPage;
  let fixture: ComponentFixture<ForminsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForminsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForminsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
