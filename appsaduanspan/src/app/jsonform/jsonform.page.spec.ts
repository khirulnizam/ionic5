import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JsonformPage } from './jsonform.page';

describe('JsonformPage', () => {
  let component: JsonformPage;
  let fixture: ComponentFixture<JsonformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JsonformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
