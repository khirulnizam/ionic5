import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForminsertjsonPage } from './forminsertjson.page';

describe('ForminsertjsonPage', () => {
  let component: ForminsertjsonPage;
  let fixture: ComponentFixture<ForminsertjsonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForminsertjsonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForminsertjsonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
