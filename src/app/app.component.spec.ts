import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Tester } from './models/tester-api.models';

describe('AppComponent', () => {
  const mockedTesters: Tester[] = [{ firstName: 'John', lastName: 'Stones', exp: 75 }, { firstName: 'Marry', lastName: 'Bee', exp: 15 },]

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should properly set testers', () => {
    component.onSearch(mockedTesters);
    expect(component.testers).toBe(mockedTesters);
  });


});
