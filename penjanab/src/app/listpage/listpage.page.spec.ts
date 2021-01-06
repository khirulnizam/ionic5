import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListpagePage } from './listpage.page';

describe('ListpagePage', () => {
  let component: ListpagePage;
  let fixture: ComponentFixture<ListpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
