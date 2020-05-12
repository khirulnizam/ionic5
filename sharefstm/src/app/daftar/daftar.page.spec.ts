import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaftarPage } from './daftar.page';

describe('DaftarPage', () => {
  let component: DaftarPage;
  let fixture: ComponentFixture<DaftarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaftarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
