import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListscategoriesComponent } from './listscategories.component';

describe('ListscategoriesComponent', () => {
  let component: ListscategoriesComponent;
  let fixture: ComponentFixture<ListscategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListscategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListscategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
