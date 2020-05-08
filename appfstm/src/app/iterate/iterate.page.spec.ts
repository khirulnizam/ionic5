import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IteratePage } from './iterate.page';

describe('IteratePage', () => {
  let component: IteratePage;
  let fixture: ComponentFixture<IteratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteratePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IteratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
