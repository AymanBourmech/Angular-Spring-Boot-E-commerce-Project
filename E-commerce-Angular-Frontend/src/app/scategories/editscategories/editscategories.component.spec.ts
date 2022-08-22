import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditscategoriesComponent } from './editscategories.component';

describe('EditscategoriesComponent', () => {
  let component: EditscategoriesComponent;
  let fixture: ComponentFixture<EditscategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditscategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditscategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
