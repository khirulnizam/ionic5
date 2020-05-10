import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayparamsPage } from './displayparams.page';

describe('DisplayparamsPage', () => {
  let component: DisplayparamsPage;
  let fixture: ComponentFixture<DisplayparamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayparamsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayparamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
