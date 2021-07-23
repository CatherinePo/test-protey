import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPointsComponent } from './list-of-points.component';

describe('ListOfPointsComponent', () => {
  let component: ListOfPointsComponent;
  let fixture: ComponentFixture<ListOfPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
