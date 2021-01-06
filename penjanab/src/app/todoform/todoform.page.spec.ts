import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodoformPage } from './todoform.page';

describe('TodoformPage', () => {
  let component: TodoformPage;
  let fixture: ComponentFixture<TodoformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
