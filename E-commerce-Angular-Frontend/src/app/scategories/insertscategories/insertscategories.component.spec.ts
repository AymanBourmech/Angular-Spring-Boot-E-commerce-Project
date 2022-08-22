import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertscategoriesComponent } from './insertscategories.component';

describe('InsertscategoriesComponent', () => {
  let component: InsertscategoriesComponent;
  let fixture: ComponentFixture<InsertscategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertscategoriesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertscategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
