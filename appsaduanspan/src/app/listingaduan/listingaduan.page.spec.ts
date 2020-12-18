import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListingaduanPage } from './listingaduan.page';

describe('ListingaduanPage', () => {
  let component: ListingaduanPage;
  let fixture: ComponentFixture<ListingaduanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingaduanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListingaduanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
