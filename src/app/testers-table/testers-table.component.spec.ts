import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Tester } from '../models/tester-api.models';

import { TestersTableComponent } from './testers-table.component';

describe('TestersTableComponent', () => {
  let component: TestersTableComponent;
  let fixture: ComponentFixture<TestersTableComponent>;
  const mockedTesters: Tester[] = [{ firstName: 'John', lastName: 'Stones', exp: 75 }, { firstName: 'Marry', lastName: 'Bee', exp: 15 },]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly render testers rows', () => {
    component.testers = mockedTesters;
    fixture.detectChanges();
    let rows = fixture.debugElement.queryAll (By.css('tbody tr'));
    expect(rows.length).toBe(mockedTesters.length);
  });
});
