import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocaldbPage } from './localdb.page';

describe('LocaldbPage', () => {
  let component: LocaldbPage;
  let fixture: ComponentFixture<LocaldbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaldbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocaldbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
